import Navbar from "../../../components/Navbar"
import Image from "next/image"
import Card from "../../../components/Card";
import Footer from "../../../components/Footer";
import { useRouter } from "next/dist/client/router";

const Vehicle = ({ name }) => {
   console.log(name)
  return (
    <>
      <Navbar />

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto py-20">
        <div className="flex flex-col">
          <h3 className="font-bold text-4xl fontPlayfair">Popular in town</h3>
          <span className="mt-6 text-gray-400 text-center">Click item to see details and reservation</span>
        </div>

        <div className="flex justify-between mt-12">
          <Card name="Merapi" location="Yogyakarta" img="/img1.png" />
          <Card name="Teluk Bogam" location="Kalimantan" img="/img2.png" />
          <Card name="Bromo" location="Malang" img="/img3.png" />
          <Card name="Malioboro" location="Yogyakarta" img="/img4.png" />
        </div>

        <div className="flex justify-between mt-12">
          <Card name="Van" location="Yogyakarta" img="/img5.png" />
          <Card name="Lamborghini" location="Shout Jakarta" img="/img6.png" />
          <Card name="Jeep" location="Malang" img="/img7.png" />
          <Card name="White Jeep" location="Kalimantan" img="/img8.png" />
        </div>

        <div className="flex justify-between mt-12">
          <Card name="Vespa" location="Yogyakarta" img="/img9.png" />
          <Card name="Honda KLX" location="Kalimantan" img="/img10.png" />
          <Card name="Honda" location="Malang" img="/img11.png" />
          <Card name="Matic Bike" location="Yogyakarta" img="/img12.png" />
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
  );
}

export default Vehicle;