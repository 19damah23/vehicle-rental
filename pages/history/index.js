import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Image from "next/image";
import Dropdown from "../../components/Dropdown"
import { useState } from "react";
import Card from "../../components/Card";

const History = () => {
  const [filter, setFilter] = useState([
    "Type", "Date Added", "Name", "Favorite Product"
  ])
  return (
    <>
      <Navbar />

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto flex flex-col lg:flex-row my-6 pt-16 lg:pt-28">
        <div className="w-full lg:w-3/4 mr-10">
          <div className="flex flex-row items-center">
            <div className="relative mr-4 lg:mr-9 w-full">
              <input type="text" name="search" placeholder="Search history" className="w-full h-9 lg:h-16 border border-gray-500 px-6 text-gray-600 focus:outline-none rounded-md bg-white opacity-25" />
              <div className="absolute right-3 top-2 w-5 h-5 lg:w-8 lg:h-8 lg:right-6 lg:top-4">
                <Image src="/search.png" alt="search" width="30px" height="30px" />
              </div>
            </div>
            <Dropdown list={filter} classBody="text-black bg-white opacity-25 w-16 lg:w-24 h-8 lg:h-16 border-gray-400 text-gray-600 text-sm lg:text-xl px-2" classList="right-0" />
          </div>

          <p className="text-gray-400 my-4 lg:my-8 text-2xl">Today</p>
          <p className="text-lg lg:text-2xl my-1 lg:my-3">User 1 cancelled the payment</p>
          <hr />
          <p className="text-lg lg:text-2xl my-1 lg:my-3">Payment for Booking Order #12367789YZS has been finished</p>
          <hr />

          <div className="flex flex-col py-8 lg:py-16">
            <p className="text-gray-400 text-2xl">A week ago</p>
            <div className="flex flex-row justify-between mt-6 lg:mt-10 relative">
              <button className="block lg:hidden absolute top-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <div className="w-32 h-16 lg:w-52 lg:h-40 object-coverrounded-md">
                <Image src="/img9.png" alt="vehicle" width="200" height="165" className="rounded-2xl" />
              </div>
              <div className="flex flex-col justify-center lg:mr-48">
                <p className="text-base lg:text-2xl font-normal">Vespa Matic</p>
                <p className="text-sm lg:text-lg font-normal">Jan 18 to 21 2021</p>
                <p className="text-base lg:text-2xl font-normal mt-2 lg:mt-4">Prepayment : Rp. 245.000</p>
                <p className="text-base lg:text-2xl font-normal text-green-600">Finish Payment & Rreturned</p>
              </div>
              <div className="flex items-center">
                <button className="bg-yellow-300 hover:bg-yellow-400 font-bold hidden lg:block lg:text-2xl lg:px-8 lg:py-2 rounded-md">Delete</button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/4 flex flex-col items-center px-4 lg:px-9 py-6 lg:py-8 border border-gray-400 rounded-md mt-6 lg:mt-0">
          <h3 className="fontPlayfair font-extrabold text-lg lg:text-2xl">New Arrival</h3>
          <Card name="Merapi" location="Yogyakarta" img="/img1.png" giveClass="mt-6" />
          <Card name="Teluk Bogam" location="Kalimantan" img="/img2.png" giveClass="mt-6" />
          <div className="flex flex-col items-center mt-6">
            <p className="text-gray-400 text-base lg:text-lg">View more</p>
            <div className="w-6 h-3 lg:w-11 lg:h-6 cursor-pointer mt-2">
              <Image src="/down.png" alt="down" width="43px" height="22px" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default History;