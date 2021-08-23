import Footer from "../../../components/Footer"
import Navbar from "../../../components/Navbar"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import backendApi from "../../api/backendApi"
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Vehicle = ({ data }) => {
  const [form, setForm] = useState({
    vehiclesId: data[0].id,
    userId: '',
    qty: 1,
    days: 1,
    date: ''
  })

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleQty = (params) => {
    if (params === 'plus' && form.qty < data[0].stock) {
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
    backendApi.post(`transactions`, form)
    .then((res) => {
      toast.success(res,{position: toast.POSITION.TOP_CENTER})
    })
    .catch((error) => {
      toast.error(error.response.data.message, {position: toast.POSITION.TOP_CENTER})
    })
  }

  console.log(form)

  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <Navbar />

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto mt-20 lg:mt-40 flex">
        <Link href="">
          <a>
            <Image src="/prev.png" alt="back" width="24px" height="40px" />
          </a>
        </Link>
        <h3 className="font-bold text-4xl ml-14">Reservation</h3>
      </div>
      {data && data.map(item => (
        <div>
          <div className="xs:container sm:container md:container lg:container xl:container mx-auto mt-16 flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 mx-auto">
              <Image src={`http://localhost:4000/files/${item.images[0]}`} alt="bike" width="696px" height="616px" />
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
                <input type="date" name="date" className="max-w-sm h-12 lg:h-20 bg-gray-200 rounded-md mt-7 px-6 focus:outline-none text-gray-400" onChange={handleInput} />
                <input type="number" name="days" min="1" placeholder="Days" className="max-w-sm h-12 lg:h-20 bg-gray-200 rounded-md mt-7 px-6 focus:outline-none text-gray-400" value={form.days} onChange={handleInput} />
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
  );
}

export async function getServerSideProps(context) {
  try {
    const id = context.params.vehicle

    const vehicle = await fetch(`${process.env.NEXT_BACKEND_API}v1/vehicles/${id}`)
    const data = await vehicle.json()

    console.log(data)

    return {
      props: data
    }
  } catch (error) {
    return new Error(error.message)
  }
}

export default Vehicle;