/* eslint-disable no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'
import cookies from 'next-cookies'
import { useContext } from 'react'
import Dropdown from '../../components/Dropdown'
import Navbar from '../../components/Navbar'
import Star from '../../components/Star'
import Card from '../../components/Card'
import Footer from '../../components/Footer'
import { requireAuthentication } from '../../HOC/requireAuthentication/requireAuthentication'

const Home = ({ dataVehicle, dataType, dataLocation }, ctx) => {
  const { role } = cookies(useContext)

  return (
    <>
      <Navbar />

      <div className="w-full bg-home bg-cover py-20 lg:py-32 bg-center">
        <div className="container mx-auto">
          <h1 className="font-bold fontPlayfair text-6xl text-white font-Playfair">Explore and <br />Travel</h1>

          <h5 className="text-white text-2xl mt-20">Vehicle Finder</h5>

          <hr className="home mt-4 text-white mb-12" />

          <div>
            <div className="flex flex-col lg:flex-row">
              <Dropdown list={dataLocation.data} titleClass="font-bold text-sm lg:text-base bg-white" classSelect="rounded-md text-black bg-white opacity-50 text-sm lg:text-base focus:outline-none lg:mr-4 h-10 w-60" />
              <Dropdown list={dataType.data} titleClass="font-bold text-sm lg:text-base" classSelect="rounded-md bg-gray-200 text-black bg-white bg-opacity-50 text-sm lg:text-base focus:outline-none h-10 w-60 mt-4 lg:mt-0" />
            </div>
          </div>

          <button className="w-28 h-10 flex items-center justify-center rounded-md border border-yellow-400 bg-yellow-400 hover:bg-yellow-500 text-base mt-10">Explore</button>
        </div>
      </div>

      <div className="container mx-auto py-10 lg:py-20">
        <div className="flex justify-between">
          <h3 className="font-bold text-xl lg:text-4xl fontPlayfair">Popular in town</h3>
          <Link href={role === 'admin' ? '/admin/vehicle' : '/vehicle'}>
            <a className="flex items-center text-yellow-400 text-xs lg:text-base">
              Show all <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </Link>
        </div>

        <div className="flex mt-8 w-full flex-wrap">
          {dataVehicle.data && dataVehicle.data.map((item, index) => (
            <Link href={role === 'admin' ? `/admin/vehicle/${item.name}/${item.id}` : `/vehicle/${item.name}/${item.id}`} key={index}>
              <a className="mx-3 lg:mx-1">
                <Card name={item.name} location={item.location} img={`https://vehicle.muchamadagushermawan.online/files/${item.images[0]}`} giveClass="w-1/2 lg:w-1/4 my-4" />
              </a>
            </Link>
          ))}
        </div>

        <div className={`mt-10 w-full h-10 flex justify-center items-center ${role === 'admin' ? 'block' : 'hidden'}`}>
        <Link href="/admin/add">
          <a className="w-full h-10 lg:h-20 flex items-center justify-center bg-black text-yellow-500 hover:bg-opacity-80 rounded-md font-bold text-2xl">Add new Item</a>
        </Link>
        </div>
      </div>

      <div className="container mx-auto pb-24 mt-12">
        <h3 className="font-bold text-xl lg:text-4xl fontPlayfair pb-7 lg:pb-14">Testimonials</h3>

        <div className="flex">
          <div className="w-1/2 flex flex-col justify-center">
            <div className="flex items-center">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className="text-lg lg:text-3xl text-gray-400 pr-10 mt-7 mb-10">”It was the right decision to rent vehicle here, I spent less money and enjoy the trip. It was an amazing experience to have a ride for wildlife trip!”</p>
            <h3 className="font-bold text-base lg:text-2xl">Edward Newgate</h3>
            <span className="text-sm lg:text-lg">Founder Circle</span>
          </div>
          <div className="w-1/2 relative lg:pl-10 my-auto">
            <Image src="/people.png" alt="people" width="383px" height="490px" className="rounded-lg" />
            <div className="flex justify-around absolute bottom-0 left-24 lg:left-64 bg-white px-2 py-2 w-20 lg:w-44 rounded-l-md">
              <div className="w-5 h-5 lg:w-10 lg:h-10">
                <Image src="/previous.png" alt="previous" width="40px" height="40px" className="cursor-pointer" />
              </div>
              <div className="w-5 h-5 lg:w-10 lg:h-10">
                <Image src="/next.png" alt="next" width="40px" height="40px" className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home

export const getServerSideProps = requireAuthentication(
  async (ctx) => {
    const res = await fetch(`${process.env.NEXT_BACKEND_API}v1/vehicles?perPage=4`)
    const dataVehicle = await res.json()

    const type = await fetch(`${process.env.NEXT_BACKEND_API}v1/category`)
    const dataType = await type.json()

    const location = await fetch(`${process.env.NEXT_BACKEND_API}v1/locations`)
    const dataLocation = await location.json()

    return {
      props: {
        dataVehicle,
        dataType,
        dataLocation
      }
    }
  }
)
