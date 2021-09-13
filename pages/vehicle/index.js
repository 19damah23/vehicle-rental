/* eslint-disable no-unused-vars */
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card'
import Footer from '../../components/Footer'

const Vehicle = () => (
    <>
      <Navbar />

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto pt-20 lg:pt-40 relative">
        <input type="text" name="search" placeholder="Search vehicle (ex. cars, cars name)" className="w-full h-16 border border-gray-400 px-6 text-gray-400 focus:outline-none rounded-md" />
        <div className="absolute right-6 top-24 lg:top-44">
          <Image src="/search.png" alt="search" width="30px" height="30px" />
        </div>
      </div>

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto pt-20">
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

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto pt-20">
        <div className="flex justify-between">
          <h3 className="font-bold text-4xl fontPlayfair">Cars</h3>
          <button className="text-yellow-400 flex items-center">
            Show all <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="flex justify-between mt-12">
          <Card name="Van" location="Yogyakarta" img="/img5.png" />
          <Card name="Lamborghini" location="Shout Jakarta" img="/img6.png" />
          <Card name="Jeep" location="Malang" img="/img7.png" />
          <Card name="White Jeep" location="Kalimantan" img="/img8.png" />
        </div>
      </div>

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto pt-20">
        <div className="flex justify-between">
          <h3 className="font-bold text-4xl fontPlayfair">Motorbike</h3>
          <button className="text-yellow-400 flex items-center">
            Show all <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="flex justify-between mt-12">
          <Card name="Vespa" location="Yogyakarta" img="/img9.png" />
          <Card name="Honda KLX" location="Kalimantan" img="/img10.png" />
          <Card name="Honda" location="Malang" img="/img11.png" />
          <Card name="Matic Bike" location="Yogyakarta" img="/img12.png" />
        </div>
      </div>

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto py-20">
        <div className="flex justify-between">
          <h3 className="font-bold text-4xl fontPlayfair">Bike</h3>
          <button className="text-yellow-400 flex items-center">
            Show all <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="flex justify-between mt-12">
          <Card name="Fixie" location="Yogyakarta" img="/img13.png" />
          <Card name="Sport Bike" location="Kalimantan" img="/img14.png" />
          <Card name="Onthel" location="Malang" img="/img15.png" />
          <Card name="Fixie Gray" location="Yogyakarta" img="/img16.png" />
        </div>
      </div>

      <Footer />
    </>
)

export default Vehicle
