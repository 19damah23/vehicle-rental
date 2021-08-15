import Dropdown from "../../components/Dropdown"
import Navbar from "../../components/Navbar"
import Image from "next/image"
import Star from "../../components/Star"
import Card from "../../components/Card"
import Footer from "../../components/Footer"

const Home = () => {

  const item = ['satu', 'dua', 'tiga', 'empat']

  return (
    <>
      <Navbar />

      <div className="bg-home bg-cover bg-center py-20 w-full">
        <div className="xs:container sm:container md:container lg:container xl:container">
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
          <Card name="Merapi" location="Yogyakarta" img="/img1.png" />
          <Card name="Teluk Bogam" location="Kalimantan" img="/img2.png" />
          <Card name="Bromo" location="Malang" img="/img3.png" />
          <Card name="Malioboro" location="Yogyakarta" img="/img4.png" />
        </div>
      </div>

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto pb-24">
        <h3 className="font-bold text-4xl fontPlayfair pb-14">Testimonials</h3>

        <div className="flex">
          <div className="w-1/2 flex flex-col justify-center">
            <div className="flex items-center">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
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

      <Footer />
    </>
  );
}

export default Home;