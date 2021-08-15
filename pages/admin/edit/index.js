import Navbar from "../../../components/Navbar"
import Image from "next/image"
import Footer from "../../../components/Footer"
import Dropdown from "../../../components/Dropdown"

const EditVehicle = () => {
  return (
    <>
      <Navbar />

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto flex flex-col py-20 lg:pt-32 lg:pb-24">
        <div className="flex items-center">
          <button className="w-5 h-10 lg:w-7 lg:h-12">
            <Image src="/prev.png" alt="back" width="28px" height="48px" />
          </button>
          <h3 className="text-xl lg:text-4xl font-bold ml-12 lg:ml-20">Add new item</h3>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-24">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-5">
            <div className="flex flex-col justify-center items-center w-full h-48 lg:h-96 bg-gray-200 rounded-lg relative">
              {/* <div className="h-16 w-20 lg:h-28 lg:w-28">
                <Image src="/camera.png" alt="camera" height="110px" width="130px" />
              </div>
              <p className="text-gray-400 mt-5">Click to add image</p> */}
              <Image src="/img17.png" alt="camera" height="410px" width="615px" className="" />
              <button className="absolute right-3 top-3 w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center font-bold text-xl rounded-full bg-yellow-300 hover:bg-yellow-400">X</button>
            </div>

            <div className="flex justify-between mt-5">
              <div className="flex flex-col justify-center items-center w-full h-20 lg:h-44 bg-gray-200 rounded-lg mr-2 lg:mr-5 relative">
                {/* <div className="w-6 h-6 lg:w-12 lg:h-12">
                  <Image src="/camera.png" alt="camera" height="65px" width="68px" />
                </div>
                <p className="text-gray-400 mt-2 lg:mt-5">Click to add image</p> */}
                <Image src="/img17.png" alt="camera" height="410px" width="615px" className="" />
                <button className="absolute right-1 top-1 w-4 h-4 lg:w-6 lg:h-6 flex items-center justify-center font-bold text-xs rounded-full bg-yellow-300 hover:bg-yellow-400">X</button>
              </div>
              <div className="flex flex-col justify-center items-center w-full h-20 lg:h-44 bg-gray-200 rounded-lg ml-2 lg:ml-5 relative">
                {/* <div className="w-6 h-6 lg:w-12 lg:h-12">
                  <Image src="/plusgray.png" alt="plus" height="65px" width="68px" />
                </div>
                <p className="text-gray-400 mt-2 lg:mt-5">Add more</p> */}
                <Image src="/img17.png" alt="camera" height="410px" width="615px" className="" />
                <button className="absolute right-1 top-1 w-4 h-4 lg:w-6 lg:h-6 flex items-center justify-center font-bold text-xs rounded-full bg-yellow-300 hover:bg-yellow-400">X</button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pl-0 lg:pl-6">
            <input type="text" name="" placeholder="Name (max up to 50 words)" className="border-b text-gray-400 font-light text-lg lg:text-2xl w-full py-5 focus:outline-none" />
            <input type="text" name="" placeholder="Location" className="border-b text-gray-400 font-light text-lg lg:text-2xl w-full py-5 focus:outline-none" />
            <input type="text" name="" placeholder="Description (max up to 150 words)" className="border-b text-gray-400 font-light text-lg lg:text-2xl w-full py-5 focus:outline-none" />
            <div className="flex flex-col mt-4 lg:mt-6">
              <label htmlFor="price" className="fontPlayfair font-bold text-lg lg:text-2xl mt-2">Price :</label>
              <input type="text" name="price" id="price" placeholder="Type the price" className="px-4 py-3 lg:py-4 rounded-md bg-gray-200 text-gray-400 text-lg lg:text-2xl focus:outline-none mt-2 lg:mt-4" />
            </div>
            <div className="flex flex-col mt-4 lg:mt-6">
              <label htmlFor="status" className="fontPlayfair font-bold text-lg lg:text-2xl mt-2">Status :</label>
              <Dropdown list={["Available", "Full booked"]} classBody="w-full pl-4 py-3 lg:py-4 bg-gray-200 text-gray-400 mt-2 lg:mt-4 rounded-md" classSelect="pl-4 text-lg lg:text-2xl" />
            </div>
            <div className="flex justify-between items-center mt-4 lg:mt-6">
              <label htmlFor="stock" className="fontPlayfair font-bold text-lg lg:text-2xl">Stock :</label>
              <div className="flex items-center justify-between">
                <button className="px-2 py-2 w-8 h-8 bg-yellow-400 hover:bg-yellow-500 rounded-md">
                  <Image src="/plus.png" alt="plus" height="20px" width="20px" />
                </button>
                <span className="text-2xl font-black mx-8 lg:mx-16">2</span>
                <button className="px-2 w-8 h-8 bg-gray-300 hover:bg-gray-400 rounded-md flex items-center">
                  <Image src="/minus.png" alt="minus" height="8px" width="20px" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-16">
          <div className="w-5/12 pr-1 lg:pr-4">
            <Dropdown list={["Cars", "Bike", "Motorbike", "+  Add category"]} classBody="bg-black w-full text-yellow-500 pr-4 rounded-lg h-12 lg:h-20" classSelect="text-base lg:text-2xl text-yellow-500 pl-2 lg:pl-4 font-bold" />
          </div>
          <div className="w-4/12 px-1 lg:px-4">
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-base lg:text-2xl h-12 lg:h-20 rounded-lg font-bold">Save item</button>
          </div>
          <div className="w-3/12 pl-1 lg:pl-4">
            <button className="w-full bg-black text-yellow-500 text-base lg:text-2xl rounded-lg font-bold h-12 lg:h-20">Save item</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EditVehicle;