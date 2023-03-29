/* eslint-disable no-unused-vars */
import Image from 'next/image'
import { useEffect, useState } from 'react'
import cookies from 'next-cookies'
import ReactPaginate from 'react-paginate'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Dropdown from '../../components/Dropdown'
import Card from '../../components/Card'
import backendApi from '../api/backendApi'
import { requireAuthentication } from '../../HOC/requireAuthentication/requireAuthentication'

const History = (context) => {
  const [data, setData] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [perPage, setPerPage] = useState(2)
  const [page, setPage] = useState(1)
  const [orderBy, setOrderBy] = useState('category')
  const [sort, setSort] = useState('DESC')
  const { userId, token } = cookies(context)
  const [query, setQuery] = useState('')

  useEffect(() => {
    backendApi.get(`transactions/history/${userId}?page=${page}&perPage=${perPage}&orderBy=${orderBy}&sortBy=${sort}&search=${query}`, {
      withCredentials: true,
      headers: {
        Cookie: `token=${token}`
      }
    })
      .then((res) => {
        console.log(res)
        const { meta } = res.data
        const { data } = res.data
        setTotalPage(meta.totalPage)
        setData(data)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }, [sort, page, perPage, orderBy, query])

  const handleChangePage = (e) => {
    setPage(e.selected + 1)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setQuery(e.target.value)
  }

  const handleOrder = (e) => {
    e.preventDefault()
    setOrderBy(e.target.value)
  }

  return (
    <>
      <Navbar />

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto flex flex-col lg:flex-row my-6 pt-16 lg:pt-28">
        <div className="w-full lg:w-3/4 mr-10">
          <div className="flex flex-row items-center">
            <div className="relative mr-4 lg:mr-9 w-full">
              <input type="text" name="search" placeholder="Search history" className="w-full h-9 lg:h-16 border border-gray-500 px-6 text-gray-600 focus:outline-none rounded-md bg-white opacity-25" onChange={handleSearch} />
              <div className="absolute right-3 top-2 w-5 h-5 lg:w-8 lg:h-8 lg:right-6 lg:top-4">
                <Image src="/search.png" alt="search" width="30px" height="30px" />
              </div>
            </div>
            <Dropdown list={[{ title: 'category' }, { title: 'name' }]} titleClass="font-bold text-sm lg:text-base" classSelect="rounded-md text-black bg-white border text-sm lg:text-base focus:outline-none lg:mr-4 h-9 lg:h-16 w-60" handleChange={handleOrder} />
          </div>

          <div className="flex flex-col py-8 lg:py-16">
            <p className="text-gray-400 text-2xl">A week ago</p>
            {data && data.map((item) => (
              <div className="flex flex-row mt-6 lg:mt-10">
                <div className="w-32 h-16 lg:w-52 lg:h-40 object-coverrounded-md">
                  <Image src={`http://13.229.122.192:8000/files/${item.images}`} alt="vehicle" width="200" height="165" className="rounded-2xl" />
                </div>
                <div className="flex flex-col justify-center ml-8 lg:ml-16">
                  <p className="text-base lg:text-2xl font-normal">{item.name}</p>
                  <p className="text-sm lg:text-lg font-normal">{`${item.startDate} to ${item.expDate}`}</p>
                  <p className="text-base lg:text-2xl font-normal mt-2 lg:mt-4">Prepayment : Rp. {item.subTotal}</p>
                  <p className="text-base lg:text-2xl font-normal text-green-600">{item.status}</p>
                </div>
              </div>
            ))}
          </div>
          <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'breack-me'}
            pageCount={totalPage}
            marginPagesDisplayed={5}
            containerClassName={'pagination'}
            subContainerClassName={'pages-pagination'}
            activeClassName={'active'}
            onPageChange={handleChangePage} />
        </div>

        <div className="w-full lg:w-1/4 flex flex-col items-center px-4 lg:px-9 py-6 lg:py-8 border border-gray-400 rounded-md mt-6 lg:mt-0">
          <h3 className="fontPlayfair font-extrabold text-lg lg:text-2xl">New Arrival</h3>
          <Card name="Merapi" location="Yogyakarta" img="/img1.png" giveClass="mt-6" />
          <Card name="Teluk Bogam" location="Kalimantan" img="/img2.png" giveClass="mt-6" />
          <div className="flex flex-col items-center mt-6">
            <p className="text-gray-400 text-base lg:text-lg">View more</p>
            <div className="w-6 h-3 lg:w-11 lg:h-6 cursor-pointer mt-2">
              <Image src="/down.png" alt="down" width="43px" height="22px" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default History

export const getServerSideProps = requireAuthentication(
  async (ctx) => {
    return {
      props: {}
    }
  }
)
