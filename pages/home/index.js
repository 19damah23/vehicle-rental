import Dropdown from "../../components/Dropdown"
import Navbar from "../../components/Navbar"
import Image from "next/image"

const Home = () => {

  const item = ['satu', 'dua', 'tiga', 'empat']

  return (
    <div>
      <Navbar />

      <div className="bg-home bg-cover bg-center">
        <div className="xs:container sm:container md:container lg:container xl:container mx-auto py-20">
          <h1 className="font-bold fontPlayfair text-6xl text-white font-Playfair">Explore and <br />Travel</h1>

          <h5 className="text-white text-2xl mt-20">Vehicle Finder</h5>

          <hr className="home mt-4 text-white mb-12" />

          <div>
            <div className="flex flex-col lg:flex-row">
              <Dropdown list={item} giveClass="mr-7" />
              <Dropdown list={item} giveClass="mt-4 lg:mt-0" />
            </div>
            <div className="flex flex-col lg:flex-row mt-4 lg:mt-8">
              <Dropdown list={item} giveClass="mr-7" />
              <Dropdown list={item} giveClass="mt-4 lg:mt-0" />
            </div>
          </div>

          <button className="w-28 h-10 flex items-center justify-center rounded-md border border-yellow-400 bg-yellow-400 hover:bg-yellow-500 text-base mt-10">Explore</button>
        </div>
      </div>

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto py-20">
        <div className="flex justify-between">
          <h3 className="font-bold text-4xl fontPlayfair">Popular in town</h3>
          <button className="text-yellow-400 flex items-center">
            Show all <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="flex justify-between mt-12">
          <div className="relative">
            <Image src="/img1.png" alt="img" width="275px" height="337px" className="rounded-md" />
            <div className="block absolute bottom-0 left-0 bg-white px-2 py-2 w-44 rounded-r-md">
              <p className="font-semibold text-lg">Merapi</p>
              <span className="text-gray-400 text-sm">Yogyakarta</span>
            </div>
          </div>
          <div className="relative">
            <Image src="/img2.png" alt="img" width="275px" height="337px" className="rounded-md" />
            <div className="block absolute bottom-0 left-0 bg-white px-2 py-2 w-44 rounded-r-md">
              <p className="font-semibold text-lg">Teluk Bogam</p>
              <span className="text-gray-400 text-sm">Kalimantan</span>
            </div>
          </div>
          <div className="relative">
            <Image src="/img3.png" alt="img" width="275px" height="337px" className="rounded-md" />
            <div className="block absolute bottom-0 left-0 bg-white px-2 py-2 w-44 rounded-r-md">
              <p className="font-semibold text-lg">Bromo</p>
              <span className="text-gray-400 text-sm">Malang</span>
            </div>
          </div>
          <div className="relative">
            <Image src="/img4.png" alt="img" width="275px" height="337px" className="rounded-md" />
            <div className="block absolute bottom-0 left-0 bg-white px-2 py-2 w-44 rounded-r-md">
              <p className="font-semibold text-lg">Malioboro</p>
              <span className="text-gray-400 text-sm">Yogyakarta</span>
            </div>
          </div>
        </div>
      </div>

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto pb-24">
        <h3 className="font-bold text-4xl fontPlayfair pb-14">Testimonials</h3>

        <div className="flex">
          <div className="w-1/2 flex flex-col justify-center">
            <div className="flex items-center">
              <div className="mr-4">
                <Image src="/star.png" alt="star" width="25px" height="25px" />
              </div>
              <div className="mr-4">
                <Image src="/star.png" alt="star" width="25px" height="25px" />
              </div>
              <div className="mr-4">
                <Image src="/star.png" alt="star" width="25px" height="25px" />
              </div>
              <div className="mr-4">
                <Image src="/star.png" alt="star" width="25px" height="25px" />
              </div>
              <div className="mr-4">
                <Image src="/star.png" alt="star" width="25px" height="25px" />
              </div>
            </div>
            <p className="text-3xl text-gray-400 pr-10 mt-7 mb-10">”It was the right decision to rent vehicle here, I spent less money and enjoy the trip. It was an amazing experience to have a ride for wildlife trip!”</p>
            <h3 className="font-bold text-2xl">Edward Newgate</h3>
            <span className="text-lg">Founder Circle</span>
          </div>
          <div className="w-1/2 relative pl-10">
            <Image src="/people.png" alt="people" width="383px" height="490px" className="rounded-lg" />
            <div className="flex justify-around absolute bottom-0 lg:left-64 bg-white px-2 py-2 w-44 rounded-l-md">
              <Image src="/previous.png" alt="previous" width="40px" height="40px" className="cursor-pointer" />
              <Image src="/next.png" alt="next" width="40px" height="40px" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-100">
        <div className="xs:container sm:container md:container lg:container xl:container mx-auto">
          <div className="py-16 flex">
            <div className="w-2/5">
              <Image src="/logo2.png" alt="logo" width="42px" height="42px" />
              <p className="text-gray-400 font-base my-2 mb-12">Plan and book your perfect trip with<br/>
                expert advice, travel tips for vehicle<br/>
                information from us</p>
              <p className="text-gray-400 font-base my-2">©2020 Vehicle Rental Center. All rights reserved</p>
            </div>
            <div className="w-1/5">
              <h5 className="font-bold text-lg">Destinations</h5>
              <ul>
                <li className="list-none text-gray-400 font-base my-2">Bali</li>
                <li className="list-none text-gray-400 font-base my-2">Yogyakarta</li>
                <li className="list-none text-gray-400 font-base my-2">Jakarta</li>
                <li className="list-none text-gray-400 font-base my-2">Kalimantan</li>
                <li className="list-none text-gray-400 font-base my-2">Malang</li>
              </ul>
            </div>
            <div className="w-1/5">
              <h5 className="font-bold text-lg">Vehicle</h5>
              <ul>
                <li className="list-none text-gray-400 font-base my-2">Bike</li>
                <li className="list-none text-gray-400 font-base my-2">Cars</li>
                <li className="list-none text-gray-400 font-base my-2">Motorbike</li>
                <li className="list-none text-gray-400 font-base my-2">Return Times</li>
                <li className="list-none text-gray-400 font-base my-2">FAQs</li>
              </ul>
            </div>
            <div className="w-1/5">
              <h5 className="font-bold text-lg">Vehicle</h5>
              <ul>
                <li className="list-none text-gray-400 font-base my-2">Adventure Travel</li>
                <li className="list-none text-gray-400 font-base my-2">Art And Culture</li>
                <li className="list-none text-gray-400 font-base my-2">Wildlife And Nature</li>
                <li className="list-none text-gray-400 font-base my-2">Family Holidays</li>
                <li className="list-none text-gray-400 font-base my-2">Culinary Trip</li>
              </ul>
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
    </div>
  );
}

export default Home;