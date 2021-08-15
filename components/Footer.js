import Image from "next/image"
import { useState } from "react";
import ListWithTitle from "./ListWithTitle";

const Footer = () => {
  const [listDestinations, setListDestinations] = useState([
    "Bali", "Yogyakarta", "Jakarta", "Kalimantan", "Malang"
  ])
  const [listVehicles, setListVehicles] = useState([
    "Bike", "Cars", "Motorbike", "Return Times", "FAQs"
  ])
  const [listInterests, setListInterests] = useState([
    "Adventure Travel", "Art And Culture", "Wildlife And Nature", "Family Holidays", "Culinary Trip"
  ])

  return (
    <footer className="bg-gray-100">
      <div className="xs:container sm:container md:container lg:container xl:container mx-auto">
        <div className="py-16 flex justify-between flex-wrap">
          <div className="xs:w-1/2 sm:w-1/2 md:w-2/5 lg:w-2/5">
            <Image src="/logo2.png" alt="logo" width="42px" height="42px" />
            <p className="text-gray-400 font-base text-xs md:text-sm lg:text-base my-2 mb-12">Plan and book your perfect trip with<br />
              expert advice, travel tips for vehicle<br />
              information from us</p>
            <p className="text-gray-400 font-base text-xs md:text-sm lg:text-base my-2">©2020 Vehicle Rental Center. All rights reserved</p>
          </div>
          <div className="xs:w-1/2 sm:w-1/2 md:w-1/5 lg:w-1/5">
            <ListWithTitle title="Destinations" list={listDestinations} />
          </div>
          <div className="xs:w-1/2 sm:w-1/2 md:w-1/5 lg:w-1/5">
            <ListWithTitle title="Vehicle" list={listVehicles} />
          </div>
          <div className="xs:w-1/2 sm:w-1/2 md:w-1/5 lg:w-1/5">
            <ListWithTitle title="Interests" list={listInterests} />
          </div>
        </div>

        <hr />

        <div className="flex justify-center items-center h-20">
          <div className="mx-4 cursor-pointer">
            <Image src="/twitter.png" alt="twitter" width="30px" height="20px" />
          </div>
          <div className="mx-4 cursor-pointer">
            <Image src="/fb.png" alt="fb" width="10px" height="20px" />
          </div>
          <div className="mx-4 cursor-pointer">
            <Image src="/ig.png" alt="ig" width="20px" height="20px" />
          </div>
          <div className="mx-4 cursor-pointer">
            <Image src="/linkedin.png" alt="linkedin" width="30px" height="20px" />
          </div>
          <div className="mx-4 cursor-pointer">
            <Image src="/yt.png" alt="yt" width="30px" height="20px" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;