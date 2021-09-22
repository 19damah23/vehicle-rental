/* eslint-disable no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import backendApi from '../../../api/backendApi'
import { requireAuthenticationAdmin } from '../../../../HOC/requireAuthentication/requireAuthentication'

const Vehicle = () => {
  const { query } = useRouter()
  const id = query.vehicle
  const [data, setData] = useState([])

  useEffect(() => {
    backendApi.get(`vehicles/vehicle/${id}`)
      .then((res) => {
        setData(res.data.data)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }, [id])

  return (
    <>
      <Navbar />

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto pt-20 lg:pt-40 flex">
        <Link href="/admin/vehicle">
          <a>
            <Image src="/prev.png" alt="back" width="24px" height="40px" />
          </a>
        </Link>
        <h3 className="font-bold text-4xl ml-14">Detail</h3>
      </div>

      {data && data.map((item) => (
        <div className="xs:container sm:container md:container lg:container xl:container mx-auto mt-16 flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/3 mx-auto rounded-md">
            <Image src={`https://vehicle.muchamadagushermawan.online/files/${item.images[0]}`} alt="bike" width="696px" height="616px" className="rounded-md" />
          </div>
          <div className="w-full lg:w-1/3 flex flex-col">
            <h1 className="fontPlayfair font-extrabold text-5xl">{item.name}</h1>
            <h3 className="fontPlayfair font-normal text-4xl mt-8">{item.location}</h3>
            <h5 className="font-bold text-green-600 text-2xl mt-8">{item.status}</h5>
            <h5 className="font-bold text-red-600 text-2xl">No Prepayment</h5>

            <p className="text-base lg:text-2xl font-light mt-4 lg:mt-8">Capacity : 1 person</p>
            <p className="text-base lg:text-2xl font-light mt-0 lg:mt-2">Type : {item.category}</p>
            <p className="text-base lg:text-2xl font-light mt-0 lg:mt-2">Reservation before 2 PM</p>

            <p className="fontPlayfair font-extrabold text-4xl text-center my-4 lg:my-8">Rp. {item.price}</p>

            <div className="flex mt-4 lg:mt-8 items-center w-1/2 lg:w-full">
              <button className="w-12 h-12 lg:w-20 lg:h-20 bg-gray-200 rounded-md">
                <Image src="/minus.png" alt="minus" width="20px" height="10px" />
              </button>
              <span className="font-extrabold text-3xl lg:text-5xl mx-auto">{item.stock}</span>
              <button className="w-12 h-12 lg:w-20 lg:h-20 bg-yellow-400 rounded-md flex items-center justify-center">
                <Image src="/plus.png" alt="plus" width="20px" height="20px" />
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto py-12">
        <Link href={`/admin/edit/${id}`}>
          <a className="bg-yellow-400 w-full flex justify-center items-center h-12 lg:h-20 rounded-md">
            Edit Item
          </a>
        </Link>
      </div>

      <Footer />
    </>
  )
}

export default Vehicle

export const getServerSideProps = requireAuthenticationAdmin(async (ctx) => {
  return {
    props: {}
  }
})
