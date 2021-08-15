import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Image from "next/image"

const Profile = () => {
  return (
    <>
      <Navbar />

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto flex flex-col mt-20 lg:mt-28">
        <h3 className="text-2xl lg:text-4xl font-bold">Profile</h3>

        <div className="flex flex-col items-center mt-8 lg:mt-11">
          <div className="relative w-36 h-36 lg:w-52 lg:h-52">
            <Image src="/image39.png" alt="people" width="215px" height="215px" className="rounded-full" />
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 bottom-0">
              <circle cx="25" cy="25" r="25" fill="#FFCD61" />
              <path d="M29.1038 16.7103C29.3158 16.4851 29.5674 16.3065 29.8443 16.1846C30.1212 16.0627 30.418 16 30.7177 16C31.0174 16 31.3142 16.0627 31.5911 16.1846C31.868 16.3065 32.1196 16.4851 32.3315 16.7103C32.5435 16.9354 32.7116 17.2028 32.8263 17.497C32.941 17.7912 33 18.1065 33 18.425C33 18.7434 32.941 19.0588 32.8263 19.353C32.7116 19.6472 32.5435 19.9145 32.3315 20.1397L21.4381 31.714L17 33L18.2104 28.2845L29.1038 16.7103Z" stroke="#393939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <h5 className="fontPlayfair text-3xl lg:text-5xl font-bold mt-4 lg:mt-6">Samantha Doe</h5>
          <p className="font-bold text-lg lg:text-2xl text-gray-400 mt-4 lg:mt-6">samanthadoe@mail.com</p>
          <p className="font-bold text-lg lg:text-2xl text-gray-400 mt-0 lg:mt-1">+62833467823</p>
          <p className="font-bold text-lg lg:text-2xl text-gray-400 mt-0 lg:mt-1">Has been active since 2013</p>
        </div>
        <div className="flex justify-center mt-5 lg:mt-10">
          <div className="mx-10 lg:mx-20 flex items-center">
            <input type="radio" id="male" name="gender" value="male" className="w-4 h-4 lg:w-7 lg:h-7" />
            <label htmlFor="male" className="ml-2 lgml-5 text-lg lg:text-2xl">Male</label>
          </div>
          <div className="mx-10 lg:mx-20 flex items-center">
            <input type="radio" id="female" name="gender" value="female" className="w-4 h-4 lg:w-7 lg:h-7" />
            <label htmlFor="female" className="ml-2 lgml-5 text-lg lg:text-2xl">Female</label>
          </div>
        </div>
        <div className="flex flex-col mt-12 lg:mt-20">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-400 text-lg lg:text-2xl">Email address :</label>
            <input id="email" type="text" name="email" placeholder="Email address" className="py-2 lg:py-4 border-b focus:outline-none bg-white border-black text-black text-lg lg:text-2xl" />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="address" className="text-gray-400 text-lg lg:text-2xl">Address :</label>
            <input id="address" type="text" name="email" placeholder="Address" className="py-2 lg:py-4 border-b focus:outline-none bg-white border-black text-black text-lg lg:text-2xl" />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="phone" className="text-gray-400 text-lg lg:text-2xl">Mobile number :</label>
            <input id="phone" type="text" name="email" placeholder="Mobile number" className="py-2 lg:py-4 border-b focus:outline-none bg-white border-black text-black text-lg lg:text-2xl" />
          </div>
        </div>

        <div className="flex flex-col mt-9 lg:mt-16">
          <h3 className="text-2xl font-extrabold">Identity</h3>
          <di className="flex justify-between">
            <div className="flex flex-col mt-4 w-1/2 pr-4 lg:pr-9">
              <label htmlFor="name" className="text-gray-400 text-lg lg:text-2xl">Display name :</label>
              <input id="name" type="text" name="name" placeholder="Mobile number" className="py-2 lg:py-4 border-b focus:outline-none bg-white border-black text-black text-lg lg:text-2xl" />
            </div>
            <div className="flex flex-col mt-4 w-1/2 pl-4 lg:pl-9">
              <label htmlFor="birth" className="text-gray-400 text-lg lg:text-2xl">DD/MM/YYYY</label>
              <input id="birth" type="date" name="birth" placeholder="Mobile number" className="py-2 lg:py-4 border-b focus:outline-none bg-white border-black text-black text-lg lg:text-2xl" />
            </div>
          </di>
        </div>

        <div className="flex justify-between my-12 lg:my-24">
          <button type="button" className="bg-yellow-300 hover:bg-yellow-400 py-3 lg:py-6 rounded-lg font-black text-sm lg:text-2xl w-28 lg:w-80">Save Change</button>
          <button type="button" className="bg-black hover:opacity-80 text-yellow-300 hover:text-yellow-500 py-3 lg:py-6 rounded-lg font-black text-sm lg:text-2xl w-28 lg:w-80">Edit Password</button>
          <button type="button" className="bg-gray-300 hover:bg-gray-400 text-black py-3 lg:py-6 rounded-lg font-black text-sm lg:text-2xl w-28 lg:w-80">Cancel</button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Profile;