/* eslint-disable no-unused-vars */
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import Card from '../../../components/Card'
import Footer from '../../../components/Footer'
import backendApi from '../../api/backendApi'
import { requireAuthenticationAdmin } from '../../../HOC/requireAuthentication/requireAuthentication'

const Vehicle = ({ data }) => {
  const [query, setQuery] = useState('')
  const [searchData, setSearchData] = useState([])

  useEffect(() => {
    backendApi
      .get(`vehicles?search=${query}`)
      .then((res) => {
        setSearchData(res.data.data)
      })
      .catch(() => {
        setSearchData([])
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
        <input
          type="text"
          name="search"
          placeholder="Search vehicle (ex. cars, cars name)"
          className="w-full h-16 border border-gray-400 px-6 text-gray-400 focus:outline-none rounded-md"
          onChange={handleSearch}
        />
        <div className="absolute right-6 top-24 lg:top-44">
          <Image src="/search.png" alt="search" width="30px" height="30px" />
        </div>
      </div>

      {query.length > 0
        ? (
        <div className="xs:container sm:container md:container lg:container xl:container mx-auto pt-20">
          <div className="flex justify-between">
            <h3 className="font-bold text-xl lg:text-4xl fontPlayfair">
              search results for "{query}"
            </h3>
          </div>

          <div className="flex mt-8 mb-10 w-full flex-wrap">
            {searchData.map((item, index) => (
              <Link href={`/admin/vehicle/${item.name}/${item.id}`}>
                <a className="mr-4">
                  <Card
                    name={item.name}
                    location={item.location}
                    img={`http://vehicle-api.iamagus.com/files/${item.images[0]}`}
                    giveClass="w-1/2 lg:w-1/4 my-4"
                    index={index}
                  />
                </a>
              </Link>
            ))}
          </div>
        </div>
          )
        : (
        <div>
          {data &&
            data.map((items, index) => (
              <div
                className="xs:container sm:container md:container lg:container xl:container mx-auto py-10"
                key={index}
              >
                <div className="flex justify-between">
                  <h3 className="font-bold text-4xl fontPlayfair">
                    {items[0].category}
                  </h3>
                  <Link
                    href={`/admin/vehicle/${items[0].category}`}
                    className="text-yellow-400 flex items-center"
                  >
                    <a className="text-yellow-400 flex items-center">
                      Show all{' '}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>

                <div className="flex mt-8 w-full flex-wrap">
                  {items.map((item) => (
                    <Link href={`/admin/vehicle/${item.name}/${item.id}`}>
                      <a className="mx-3 lg:mx-0 lg:mr-3">
                        <Card
                          name={item.name}
                          location={item.location}
                          img={`http://vehicle-api.iamagus.com/files/${item.images[0]}`}
                          giveClass="w-1/2 lg:w-1/4 my-4"
                          index={item.id}
                        />
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
          )}

      <Footer />
    </>
  )
}

export default Vehicle

export const getServerSideProps = requireAuthenticationAdmin(async (ctx) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_ENV}v1/vehicles/grouped`
  )
  const data = await res.json()

  return { props: data }
})
