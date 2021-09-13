/* eslint-disable no-unused-vars */
import Image from 'next/image'
import { useState } from 'react'
import Router from 'next/router'
import { ToastContainer, toast, Zoom } from 'react-toastify'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import Dropdown from '../../../components/Dropdown'
import backendApi from '../../api/backendApi'
import 'react-toastify/dist/ReactToastify.css'

const AddVehicle = ({ dataType }) => {
  const [stock, setStock] = useState(1)
  const [images, setImages] = useState([])
  const [imagesPreview] = [images.map((item) => URL.createObjectURL(item))]
  const [input, setInput] = useState({
    name: '',
    location: '',
    description: '',
    price: null,
    stock,
    category: 'Motorbike',
    status: 'available'
  })

  const handleInput = (e) => {
    e.preventDefault()

    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const onFileChange = (e) => {
    setImages([...e.target.files])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { files } = document.querySelector('input[type="file"]')
    const data = new FormData()
    data.append('name', input.name)
    data.append('location', input.location)
    data.append('description', input.description)
    data.append('price', input.price)
    data.append('stock', input.stock)
    data.append('category', input.category)
    data.append('status', input.status)
    for (let i = 0; i < files.length; i++) {
      data.append('images', files[i])
    }

    await backendApi.post('vehicles/add', data, {
      withCredentials: true
    })
      .then((res) => {
        toast.success('Successfully added new vehicle!', { position: toast.POSITION.TOP_CENTER })

        setTimeout(() => {
          Router.push('/admin/vehicle')
        }, 2500)
      })
      .catch((err) => {
        toast.error(err.response.data.message, { position: toast.POSITION.TOP_CENTER })
      })
  }

  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <Navbar />

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto flex flex-col py-20 lg:pt-32 lg:pb-24">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="flex items-center">
            <button className="w-5 h-10 lg:w-7 lg:h-12">
              <Image src="/prev.png" alt="back" width="28px" height="48px" />
            </button>
            <h3 className="text-xl lg:text-4xl font-bold ml-12 lg:ml-20">Add new item</h3>
          </div>

          <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-24">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-5">
              <div className="flex flex-col justify-center items-center w-full h-48 lg:h-96 bg-gray-200 rounded-lg">
                {imagesPreview[0]
                  ? (
                  <img src={imagesPreview[0]} alt="camera" className="w-full h-full rounded-md" />
                    )
                  : (
                  <label htmlFor="images" className="flex items-center flex-col">
                    <div className="h-16 w-20 lg:h-28 lg:w-28">
                      <Image src="/camera.png" alt="camera" height="110px" width="130px" />
                    </div>
                    <p className="text-gray-400 mt-5">Click to add image</p>
                  </label>
                    )}
              </div>

              {imagesPreview[1]
                ? (
                <div className="flex justify-between mt-5 overflow-x-scroll">{
                  imagesPreview.map((item) => (
                    <div className="flex flex-col justify-center items-center w-full h-20 lg:h-44 bg-gray-200 rounded-lg mr-2 lg:mr-5">
                      <img src={item} alt="camera" className="w-full h-full rounded-md" />
                    </div>
                  ))
                }</div>
                  )
                : (
                <div className="flex justify-between mt-5">
                  <div className="flex flex-col justify-center items-center w-full h-20 lg:h-44 bg-gray-200 rounded-lg mr-2 lg:mr-5">
                    <label htmlFor="images" className="flex items-center flex-col">
                      <div className="w-6 h-6 lg:w-12 lg:h-12">
                        <Image src="/camera.png" alt="camera" height="65px" width="68px" />
                      </div>
                      <p className="text-gray-400 mt-2 lg:mt-5">Click to add image</p>
                    </label>
                  </div>
                  <div className="flex flex-col justify-center items-center w-full h-20 lg:h-44 bg-gray-200 rounded-lg ml-2 lg:ml-5">
                    <label htmlFor="images" className="flex items-center flex-col">
                      <div className="w-6 h-6 lg:w-12 lg:h-12">
                        <Image src="/plusgray.png" alt="plus" height="65px" width="68px" />
                      </div>
                      <p className="text-gray-400 mt-2 lg:mt-5">Add more</p>
                    </label>
                  </div>
                </div>
                  )}
              <input type="file" name="images" id="images" multiple className="hidden" onChange={(e) => onFileChange(e)} accept="image/jpeg, image/png, image/jpg" />
            </div>
            <div className="w-full lg:w-1/2 pl-0 lg:pl-5">
              <input type="text" name="name" placeholder="Name (max up to 50 words)" className="border-b text-gray-400 font-light text-lg lg:text-2xl w-full py-4 focus:outline-none" onChange={handleInput} />
              <input type="text" name="location" placeholder="Location" className="border-b text-gray-400 font-light text-lg lg:text-2xl w-full py-4 focus:outline-none" onChange={handleInput} />
              <input type="text" name="description" placeholder="Description (max up to 150 words)" className="border-b text-gray-400 font-light text-lg lg:text-2xl w-full py-4 focus:outline-none" onChange={handleInput} />
              <div className="flex flex-col mt-4">
                <label htmlFor="price" className="fontPlayfair font-bold text-lg lg:text-2xl mt-2">Price :</label>
                <input type="text" name="price" id="price" placeholder="Type the price" className="px-4 py-3 lg:py-4 rounded-md bg-gray-200 text-gray-400 text-lg lg:text-2xl focus:outline-none mt-2 lg:mt-4" onChange={handleInput} />
              </div>
              <div className="flex flex-col mt-4">
                <Dropdown title="Status :" name="status" id="status" list={[{ title: 'available' }, { title: 'full booked' }]} handleChange={handleInput} titleClass="fontPlayfair font-bold text-lg lg:text-2xl mt-2" classSelect="px-4 py-3 lg:py-4 rounded-md bg-gray-200 text-gray-400 text-lg lg:text-2xl focus:outline-none mt-2 lg:mt-4" />
              </div>
              <div className="flex justify-between items-center mt-4 lgmt-6">
                <label htmlFor="stock" className="fontPlayfair font-bold text-lg lg:text-2xl">Stock :</label>
                <div className="flex items-center justify-between">
                  <button type="button" className="px-2 py-2 w-8 h-8 bg-yellow-400 hover:bg-yellow-500 rounded-md" onClick={() => setStock(stock + 1)}>
                    <Image src="/plus.png" alt="plus" height="20px" width="20px" />
                  </button>
                  <span className="text-2xl font-black mx-8 lg:mx-16">{stock}</span>
                  <button type="button" className="px-2 w-8 h-8 bg-gray-300 hover:bg-gray-400 rounded-md flex items-center" onClick={() => setStock(stock > 1 ? stock - 1 : 1)}>
                    <Image src="/minus.png" alt="minus" height="8px" width="20px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-16">
            <div className="w-2/5 pr-2 lg:pr-4">
              <Dropdown list={dataType.data} name="category" id="category" handleChange={handleInput} classSelect="px-4 w-full h-12 lg:h-20 rounded-md text-white text-lg lg:text-2xl focus:outline-none bg-black font-bold" />
            </div>
            <div className="w-3/5 pl-2 lg:pl-4">
              <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-2xl h-12 lg:h-20 rounded-lg font-bold" type="submit">Save item</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export async function getServerSideProps () {
  const type = await fetch(`${process.env.NEXT_BACKEND_API}v1/category`)
  const dataType = await type.json()

  return {
    props: {
      dataType
    }
  }
}

export default AddVehicle
