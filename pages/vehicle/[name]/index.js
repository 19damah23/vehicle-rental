/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Card from '../../../components/Card'
import Footer from '../../../components/Footer'
import backendApi from '../../api/backendApi'
import { useRouter } from 'next/router'
import { requireAuthentication } from '../../../HOC/requireAuthentication/requireAuthentication'

const Vehicle = () => {
  const { query } = useRouter()
  const [data, setData] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [perPage, setPerPage] = useState(5)
  const [page, setPage] = useState(1)
  const [orderBy, setOrderBy] = useState('name')
  const [sort, setSort] = useState('ASC')

  useEffect(() => {
    backendApi.get(`vehicles/${query.name}?page=${page}&orderBy=${orderBy}&perPage=${perPage}&sortBy=${sort}`, {
      withCredentials: true,
      origin: ['http://vehicle-api.iamagus.com']
    })
      .then((res) => {
        const { meta } = res.data
        const { data } = res.data
        setTotalPage(meta.totalPage)
        setData(data)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }, [sort, page, perPage, orderBy])

  const handleChangePage = (e) => {
    setPage(e.selected + 1)
  }

  const handlePerPage = (e) => {
    setPerPage(e.target.value)
  }

  const handleOrderBy = (e) => {
    setOrderBy(e.target.value)
  }

  const handleSortBy = (e) => {
    setSort(e.target.value)
  }
  return (
    <>
      <Navbar />

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto py-20 mt lg:pt-40">
        <div className="flex flex-col">
          <h3 className="font-bold text-4xl fontPlayfair">{query.name} in town</h3>
          <span className="mt-6 text-gray-400 text-center">Click item to see details and reservation</span>
        </div>

        <div className="flex mt-8 w-full flex-wrap">
          {data && data.map((item, index) => (
            <Link href={`/admin/vehicle/${item.name}/${item.id}`}>
              <a className="mx-3 lg:mx-0 lg:mr-3">
                <Card name={item.name} location={item.location} img={`http://vehicle-api.iamagus.com/files/${item.images[0]}`} giveClass="w-1/2 lg:w-1/4 my-4" index={index} />
              </a>
            </Link>
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

      <Footer />
    </>
  )
}

export default Vehicle

export const getServerSideProps = requireAuthentication(async (ctx) => {
  return {
    props: {}
  }
})
