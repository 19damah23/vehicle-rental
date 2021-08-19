import Navbar from "../../../components/Navbar"
import Image from "next/image"
import Card from "../../../components/Card";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { useEffect, useState } from "react";
import backendApi from "../../api/backendApi";

const Vehicle = ({ data }) => {
  const [query, setQuery] = useState('')
  const [searchData, setSearchData] = useState([])

  useEffect(() => {
    backendApi.get(`vehicles?search=${query}`)
      .then((res) => {
        console.log(res)
        setSearchData(res.data.data)
      })
      .catch((err) => {
        setSearchData([])
        console.log(err.response.data.message)
      })
  }, [query])

  const handleSearch = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  return (
    <>
      <Navbar />

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto pt-20 lg:pt-40 relative">
        <input type="text" name="search" placeholder="Search vehicle (ex. cars, cars name)" className="w-full h-16 border border-gray-400 px-6 text-gray-400 focus:outline-none rounded-md" onChange={handleSearch} />
        <div className="absolute right-6 top-24 lg:top-44">
          <Image src="/search.png" alt="search" width="30px" height="30px" />
        </div>
      </div>

      {query.length > 0 ? searchData.map((item, index) => (
        <div className="xs:container sm:container md:container lg:container xl:container mx-auto pt-20">
          <div className="flex justify-between">
            <h3 className="font-bold text-4xl fontPlayfair">Popular in town</h3>
            <Link href="/admin/vehicle/popular" className="text-yellow-400 flex items-center">
              <a className="text-yellow-400 flex items-center flex">
                Show all <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </Link>
          </div>

          <div className="flex mt-8 w-full flex-wrap">
            <Link href={`/admin/vehicle/${item.name}/${item.id}`}>
              <a className="mr-4">
                <Card name={item.name} location={item.location} img={`http://localhost:8080/files/${item.images[0]}`} giveClass="w-1/2 lg:w-1/4 my-4" index={index} />
              </a>
            </Link>
          </div>
        </div>
      )) : (
        <div>
          <div className="xs:container sm:container md:container lg:container xl:container mx-auto pt-20">
            <div className="flex justify-between">
              <h3 className="font-bold text-4xl fontPlayfair">Popular in town</h3>
              <Link href="/admin/vehicle/popular" className="text-yellow-400 flex items-center">
                <a className="text-yellow-400 flex items-center flex">
                  Show all <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </Link>
            </div>

            <div className="flex mt-8 w-full flex-wrap">
              {data && data.map((item, index) => (
                <Link href={`/admin/vehicle/${item.name}/${item.id}`}>
                  <a className="mx-auto lg:mx-2">
                    <Card name={item.name} location={item.location} img={`http://localhost:8080/files/${item.images[0]}`} giveClass="w-1/2 lg:w-1/4 my-4" index={index} />
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className="xs:container sm:container md:container lg:container xl:container mx-auto pt-20">
            <div className="flex justify-between">
              <h3 className="font-bold text-4xl fontPlayfair">Cars</h3>
              <Link href="/admin/vehicle/popular" className="text-yellow-400 flex items-center">
                <a className="text-yellow-400 flex items-center flex">
                  Show all <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </Link>
            </div>

            <div className="flex mt-8 w-full flex-wrap">
              {data && data.map((item, index) => (
                <Link href={`/admin/vehicle/${item.name}/${item.id}`}>
                  <a className="mx-auto lg:mx-2">
                    <Card name={item.name} location={item.location} img={`http://localhost:8080/files/${item.images[0]}`} giveClass="w-1/2 lg:w-1/4 my-4" index={index} />
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className="xs:container sm:container md:container lg:container xl:container mx-auto pt-20">
            <div className="flex justify-between">
              <h3 className="font-bold text-4xl fontPlayfair">Motorbike</h3>
              <Link href="/admin/vehicle/popular" className="text-yellow-400 flex items-center">
                <a className="text-yellow-400 flex items-center flex">
                  Show all <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </Link>
            </div>

            <div className="flex mt-8 w-full flex-wrap">
              {data && data.map((item, index) => (
                <Link href={`/admin/vehicle/${item.name}/${item.id}`}>
                  <a className="mx-auto lg:mr-2">
                    <Card name={item.name} location={item.location} img={`http://localhost:8080/files/${item.images[0]}`} giveClass="w-1/2 lg:w-1/4 my-4" index={index} />
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className="xs:container sm:container md:container lg:container xl:container mx-auto py-20">
            <div className="flex justify-between">
              <h3 className="font-bold text-4xl fontPlayfair">Bike</h3>
              <Link href="/admin/vehicle/popular" className="text-yellow-400 flex items-center">
                <a className="text-yellow-400 flex items-center flex">
                  Show all <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </Link>
            </div>

            <div className="flex mt-8 w-full flex-wrap">
              {data && data.map((item, index) => (
                <Link href={`/admin/vehicle/${item.name}/${item.id}`}>
                  <a className="mx-auto lg:mx-2">
                    <Card name={item.name} location={item.location} img={`http://localhost:8080/files/${item.images[0]}`} giveClass="w-1/2 lg:w-1/4 my-4" index={index} />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_BACKEND_API}v1/vehicles`)
  const data = await res.json()

  return { props: data }
}

export default Vehicle;