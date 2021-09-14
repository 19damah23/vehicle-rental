/* eslint-disable no-unused-vars */
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import backendApi from '../api/backendApi'
import { ToastContainer, toast, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import cookies from 'next-cookies'
import Router from 'next/router'
import Dropdown from '../../components/Dropdown'

const Payment = ({ data }, req) => {
  const [form, setForm] = useState({
    status: 'processed',
    typePay: 'cash'
  })

  const handleInput = (e) => {
    e.preventDefault()
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (id) => {
    backendApi.patch(`transactions/${id}`, form, {
      withCredentials: true,
      origin: ['https://vehicle.muchamadagushermawan.online']
    })
      .then(() => {
        toast.success('Transaction in process!', { position: toast.POSITION.TOP_CENTER })
        setTimeout(() => {
          Router.push('/history')
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

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto mt-8 lg:mt-12 flex pt-16 lg:pt-28">
        <Link href="/history" className="w-3.5 h-7">
          <a className="w-4 h-8 lg:w-6 lg:h-10">
            <Image src="/prev.png" alt="back" width="24px" height="40px" />
          </a>
        </Link>
        <h3 className="font-bold text-2xl lg:text-4xl ml-8 lg:ml-14">Payment</h3>
      </div>

      {data && data.map((item, index) => (
        <div key={index}>
          <div className="xs:container sm:container md:container lg:container xl:container mx-auto mt-12 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 lg:mr-12">
              <Image
                src={`https://vehicle.muchamadagushermawan.online/files/${item.image}`}
                alt="vehicle"
                width="450px"
                height="315px"
                className="rounded-md"
              />
            </div>
            <div className="w-full lg:w-2/3 flex flex-col">
              <h1 className="fontPlayfair font-extrabold text-3xl lg:text-5xl">
                {item.vehicle}
              </h1>
              <h3 className="fontPlayfair font-normal text-xl lg:text-4xl mt-1 lg:mt-2">{item.location}</h3>
              <h5 className="font-bold text-gray-400 text-lg lg:text-2xl mt-2 lg:mt-4">
                No Prepayment
              </h5>
              <span className="fontPlayfair font-bold text-2xl lg:text-4xl mt-2 lg:mt-4">
                {item.invoice}
              </span>
              <button className="bg-yellow-400 rounded-md font-semibold w-40 h-7 mt-3 lg:w-60 lg:h-10 lg:mt-7 hover:bg-yellow-500">
                Copy booking code
              </button>
            </div>
          </div>

          <div className="xs:container sm:container md:container lg:container xl:container mx-auto mt-6 lg:mt-12 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 lg:mr-12 flex flex-col">
              <p className="border rounded-md font-bold text-lg px-7 py-4 lg:text-2xl lg:px-16 lg:py-9 max-w-md">
                Quantity : {`${item.qty} ${item.category}`}
              </p>
              <div className="flex flex-col border rounded-md px-7 py-4 lg:pl-16 lg:py-9 mt-4 lg:mt-6">
                <p className="font-extrabold text-lg lg:text-2xl">Order details :</p>
                <p className="font-base text-lg lg:text-2xl mt-2">{`${item.qty} ${item.category}`} : Rp. {item.subTotal}</p>
                <p className="font-bold text-lg lg:text-2xl mt-10">Total : {item.subTotal}</p>
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col mt-4 lg:mt-0">
              <div className="flex flex-col lg:flex-row justify-between border rounded-md py-4 px-7 lg:px-16 lg:py-9">
                <p className="font-extrabold text-lg lg:text-2xl">Reservation Date :</p>
                <p className="font-base text-lg lg:text-2xl">{`${item.startDate} to ${item.expDate}`}</p>
              </div>
              <div className="flex flex-col border rounded-md py-4 px-7 lg:pl-16 lg:py-9 mt-4 lg:mt-6 h-full">
                <p className="font-extrabold text-lg lg:text-2xl">Identity :</p>
                <p className="font-base text-lg lg:text-2xl mt-2">
                  {item.username} {item.phone !== null ? (item.phone) : ''}
                </p>
                <p className="font-base text-lg lg:text-2xl mt-2">{item.email}</p>
              </div>
            </div>
          </div>

          <div className="xs:container sm:container md:container lg:container xl:container mx-auto my-6 lg:my-12 flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <p className="text-2xl lg:text-4xl font-bold">Payment code :</p>
            <div className="flex flex-row items-center justify-between border rounded-md px-8 py-4 mt-2 lg:mt-0">
              <p className="font-bold fontPlayfair text-lg lg:text-2xl mr-8 lg:mr-14">{item.invoice}</p>
              <button className="bg-black text-yellow-400 rounded-lg px-4 lg:px-8 font-bold text-lg lg:text-2xl pb-1">copy</button>
            </div>
            <Dropdown list={[{ title: 'cash' }, { title: 'transfer' }]} titleClass="font-bold text-sm lg:text-base" classSelect="rounded-md border text-black bg-white bg-opacity-50 text-sm lg:text-base focus:outline-none h-16 w-60 mt-4 lg:mt-0 px-4" handleChange={handleInput} name="typePay" />
          </div>

          <div className="xs:container sm:container md:container lg:container xl:container mx-auto my-12">
            <button className="w-full font-extrabold text-lg lg:text-2xl bg-yellow-400 hover:bg-yellow-500 py-3 lg:py-6 rounded-md" onClick={() => handleSubmit(item.id)}>Finish payment : <span className="text-red-600">59:30</span></button>
          </div>
        </div>
      ))}

      <Footer />
    </>
  )
}

export async function getServerSideProps (context) {
  try {
    const cookie = cookies(context).token

    const vehicle = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_ENV}v1/transactions/${context.params.id}`, {
      withCredentials: true,
      headers: {
        Cookie: `token=${cookie}`
      }
    })
    const data = await vehicle.json()

    return {
      props: data
    }
  } catch (error) {
    if (!context.req) {
      Router.push('/login')
    }

    if (context.req) {
      context.res.writeHead(301, {
        Location: 'https://vehicle-rental.vercel.app/login'
      })
      context.res.end()
    }
  }
}

export default Payment
