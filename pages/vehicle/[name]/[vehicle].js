/* eslint-disable no-unused-vars */
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import backendApi from '../../api/backendApi'
import { ToastContainer, toast, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import cookies from 'next-cookies'
import { requireAuthentication } from '../../../HOC/requireAuthentication/requireAuthentication'

const Vehicle = ({ data }, req) => {
  const router = useRouter()
  const { userId } = cookies(req)
  const [form, setForm] = useState({
    vehiclesId: data.data[0].id,
    userId,
    qty: 1,
    days: 1,
    date: ''
  })

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleQty = (params) => {
    if (params === 'plus' && form.qty < data.data[0].stock) {
      setForm({
        ...form,
        qty: form.qty + 1
      })
    }
    if (params === 'minus' && form.qty > 1) {
      setForm({
        ...form,
        qty: form.qty - 1
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    backendApi.post('transactions', form, {
      withCredentials: true,
      origin: ['http://13.229.122.192:8000']
    })
      .then((res) => {
        toast.success('Transaction success!', { position: toast.POSITION.TOP_CENTER })
        setTimeout(() => {
          router.push(`/payment/${res.data.data.id}`)
        }, 2500)
      })
      .catch((error) => {
        toast.error(error.response.data.message, { position: toast.POSITION.TOP_CENTER })
      })
  }

  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <Navbar />

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto mt-20 lg:mt-40 flex">
        <Link href="/vehicle">
          <a>
            <Image src="/prev.png" alt="back" width="24px" height="40px" />
          </a>
        </Link>
        <h3 className="font-bold text-4xl ml-14">Reservation</h3>
      </div>
      {data.data && data.data.map((item) => (
        <div key={item.id}>
          <div className="xs:container sm:container md:container lg:container xl:container mx-auto mt-16 flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 mx-auto">
              <div className="w-696 object-contain h-616">
                <img src={`http://13.229.122.192:8000/files/${item.images[0]}`} alt={item.name} className="object-cover w-full h-full rounded-md" />
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col">
              <h1 className="fontPlayfair font-extrabold text-5xl">{item.name}</h1>
              <h3 className="fontPlayfair font-normal text-4xl mt-8">{item.location}</h3>
              <h5 className="font-bold text-red-600 text-2xl mt-8">No Prepayment</h5>

              <div className="flex mt-16 items-center w-1/2 lg:w-full">
                <button className="w-12 h-12 lg:w-20 lg:h-20 bg-gray-200 rounded-md" onClick={() => handleQty('minus')} >
                  <Image src="/minus.png" alt="minus" width="20px" height="10px" />
                </button>
                <span className="font-extrabold text-3xl lg:text-5xl mx-auto">{form.qty}</span>
                <button className="w-12 h-12 lg:w-20 lg:h-20 bg-yellow-400 rounded-md flex items-center justify-center" onClick={() => handleQty('plus')}>
                  <Image src="/plus.png" alt="plus" width="20px" height="20px" />
                </button>
              </div>

              <div className="flex flex-col mt-12">
                <h5 className="font-bold">Reservation Date :</h5>
                <input type="date" name="date" className="w-full lg:w-96 h-12 lg:h-20 bg-gray-200 rounded-md mt-7 px-6 focus:outline-none text-gray-400" onChange={handleInput} />
                <input type="number" name="days" min="1" placeholder="Days" className="w-full lg:w-96 h-12 lg:h-20 bg-gray-200 rounded-md mt-7 px-6 focus:outline-none text-gray-400" value={form.days} onChange={handleInput} />
              </div>
            </div>
          </div>

          <div className="xs:container sm:container md:container lg:container xl:container mx-auto py-12">
            <button className="bg-yellow-400 w-full h-12 lg:h-20 rounded-md" onClick={(e) => handleSubmit(e)}>Pay now : Rp. {form.qty * item.price * form.days}</button>
          </div>
        </div>
      ))}

      <Footer />
    </>
  )
}

export default Vehicle

export const getServerSideProps = requireAuthentication(async (ctx) => {
  const id = ctx.params.vehicle

  const vehicle = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_ENV}v1/vehicles/vehicle/${id}`)
  const data = await vehicle.json()

  return {
    props: { data }
  }
})
