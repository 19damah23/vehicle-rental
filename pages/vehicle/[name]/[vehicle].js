import Footer from "../../../components/Footer"
import Navbar from "../../../components/Navbar"
import Image from "next/image"

const Vehicle = () => {
  return (
    <>
      <Navbar />

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto pt-20 flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 mx-auto">
          <Image src="/img17.png" alt="bike" width="696px" height="616px" />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col">
          <h1 className="fontPlayfair font-extrabold text-5xl">Fixie - Gray Only</h1>
          <h3 className="fontPlayfair font-normal text-4xl mt-8">Yogyakarta</h3>
          <h5 className="font-bold text-red-600 text-2xl mt-8">No Prepayment</h5>

          <div className="flex mt-16 items-center w-1/2 lg:w-full">
            <button className="w-12 h-12 lg:w-20 lg:h-20 bg-gray-200 rounded-md">
              <Image src="/minus.png" alt="minus" width="20px" height="10px" />
            </button>
            <span className="font-extrabold text-3xl lg:text-5xl mx-auto">2</span>
            <button className="w-12 h-12 lg:w-20 lg:h-20 bg-yellow-400 rounded-md flex items-center justify-center">
              <Image src="/plus.png" alt="plus" width="20px" height="20px" />
            </button>
          </div>

          <div className="flex flex-col mt-12">
            <h5 className="font-bold">Reservation Date :</h5>
            <input type="date" name="date" className="max-w-sm h-12 lg:h-20 bg-gray-200 rounded-md mt-7 px-6 focus:outline-none text-gray-400" />
            <input type="number" name="day" min="1" placeholder="Days" className="max-w-sm h-12 lg:h-20 bg-gray-200 rounded-md mt-7 px-6 focus:outline-none text-gray-400" />
          </div>
        </div>
      </div>

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto py-12">
        <button className="bg-yellow-400 w-full h-12 lg:h-20 rounded-md">Pay now : Rp. 178.000</button>
      </div>

      <Footer />
    </>
  );
}

export default Vehicle;