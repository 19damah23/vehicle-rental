/* eslint-disable no-unused-vars */
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { requireAuthentication } from '../../HOC/requireAuthentication/requireAuthentication'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-about bg-cover py-20 lg:py-32 bg-center min-h-screen">
        <div className="container mx-auto text-center text-white mt-12 lg:mt-24">
          <h1 className="text-3xl lg:text-6xl font-black">About Vehicle Rental</h1>
          <p className="text-2xl lg:text-4xl font-medium mt-8">Vehicle rental is an application that will help us when we need vehicle rental services. With vehicle rental we can determine the date and there are several ways of payment that will be very easy. <br /><br />
          We provide various types of vehicles, ranging from family vehicles, sport, to jeeps. You can choose the vehicle that best suits your needs.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About

export const getServerSideProps = requireAuthentication(
  async (ctx) => {
    return {
      props: {}
    }
  }
)
