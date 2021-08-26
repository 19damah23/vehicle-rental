import Navbar from "../../../components/Navbar"
import Image from "next/image"
import Footer from "../../../components/Footer"
import Dropdown from "../../../components/Dropdown"
import { useEffect, useState } from "react"
import Router, { useRouter } from "next/router";
import backendApi from "../../api/backendApi"
import Link from "next/link"
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditVehicle = ({ dataType }) => {
  const { query } = useRouter()
  const id = query.id
  const [images, setImages] = useState([]);
  const [imagesPreview] = [images.map((item) => URL.createObjectURL(item))]
  const [input, setInput] = useState({
    name: '',
    location: '',
    description: '',
    price: null,
    stock: '',
    category: 'cars',
    status: 'available',
    oldImage: []
  });

  const setData = (data) => {
    setInput({
      name: data.name,
      location: data.location,
      description: data.description,
      price: data.price,
      stock: data.stock,
      category: data.category,
      status: data.status,
      oldImage: data.images,
    })
  }

  useEffect(() => {
    backendApi.get(`vehicles/${id}`)
      .then((result) => {
        const data = result.data.data[0]
        setData(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [id])

  const handleInput = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value)
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onFileChange = (e) => {
    setImages([...e.target.files]);
  };

  const setStock = (params) => {
    if (params === "plus") {
      setInput({
        ...input,
        stock: input.stock + 1
      })
    }

    if (params === "minus") {
      setInput({
        ...input,
        stock: input.stock - 1
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const files = document.querySelector('input[type="file"]').files
    const data = new FormData();
    data.append('name', input.name)
    data.append('location', input.location)
    data.append('description', input.description)
    data.append('price', input.price)
    data.append('stock', input.stock)
    data.append('category', input.category)
    data.append('status', input.status)
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        data.append('images', files[i])
      };
    } else {
      for (let i = 0; i < input.oldImage.length; i++) {
        data.append('images', input.oldImage[i])
      };
    }

    backendApi.patch(`vehicles/${id}`, data, {
      withCredentials: true
    })
      .then((res) => {
        toast.success('Successfully update vehicle!', { position: toast.POSITION.TOP_CENTER })

        setTimeout(() => {
          Router.push(`/admin/vehicle`)
        }, 2500);
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  };

  const handleDelete = (id) => {
    backendApi.delete(`vehicles/${id}`, {
      withCredentials: true
    })
      .then((res) => {
        toast.success('Successfully delete vehicle!', { position: toast.POSITION.TOP_CENTER })

        setTimeout(() => {
          Router.push(`/admin/vehicle`)
        }, 2500);
      })
      .catch((error) => {
        alert(error.response.data.message)
      })
  }

  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <Navbar />

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto flex flex-col py-20 lg:pt-32 lg:pb-24">
        <div className="flex items-center">
          <Link href="/admin/vehicle" type="button" className="w-5 h-10 lg:w-7 lg:h-12">
            <Image src="/prev.png" alt="back" width="28px" height="48px" />
          </Link>
          <h3 className="text-xl lg:text-4xl font-bold ml-12 lg:ml-20">Edit item</h3>
        </div>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="flex flex-col lg:flex-row justify-between mt-10 lg:mt-24">
            <div className="w-full lg:w-1/2 pr-0 lg:pr-5">
              <div className="flex flex-col justify-center items-center w-full h-48 lg:h-96 bg-gray-200 rounded-lg relative">
                {imagesPreview[0] ? (
                  <img src={imagesPreview[0]} alt="camera" className="w-full h-full rounded-md" />
                ) : input.oldImage ? (
                  <img src={`http://localhost:4000/files/${input.oldImage[0]}`} alt="camera" className="w-full h-full rounded-md" />
                ) : (
                  <label htmlFor="images" className="flex items-center flex-col">
                    <div className="h-16 w-20 lg:h-28 lg:w-28">
                      <Image src="/camera.png" alt="camera" height="110px" width="130px" />
                    </div>
                    <p className="text-gray-400 mt-5">Click to add image</p>
                  </label>
                )}
              </div>

              {imagesPreview[1] ? (
                <div className="flex justify-between mt-5 overflow-x-scroll">{
                  imagesPreview.map((item) => (
                    <div className="flex flex-col justify-center items-center w-full h-20 lg:h-44 bg-gray-200 rounded-lg mr-2 lg:mr-5">
                      <img src={item} alt="camera" className="w-full h-full rounded-md" />
                    </div>
                  ))
                }</div>
              ) : (
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
            <div className="w-full lg:w-1/2 pl-0 lg:pl-6">
              <input type="text" name="name" placeholder="Name (max up to 50 words)" className="border-b text-gray-400 font-light text-lg lg:text-2xl w-full py-5 focus:outline-none" value={input.name} onChange={handleInput} />
              <input type="text" name="location" placeholder="Location" className="border-b text-gray-400 font-light text-lg lg:text-2xl w-full py-5 focus:outline-none" value={input.location} onChange={handleInput} />
              <input type="text" name="description" placeholder="Description (max up to 150 words)" className="border-b text-gray-400 font-light text-lg lg:text-2xl w-full py-5 focus:outline-none" value={input.description} onChange={handleInput} />
              <div className="flex flex-col mt-4 lg:mt-6">
                <label htmlFor="price" className="fontPlayfair font-bold text-lg lg:text-2xl mt-2">Price :</label>
                <input type="text" name="price" id="price" placeholder="Type the price" className="px-4 py-3 lg:py-4 rounded-md bg-gray-200 text-gray-400 text-lg lg:text-2xl focus:outline-none mt-2 lg:mt-4" value={input.price} onChange={handleInput} />
              </div>
              <div className="flex flex-col mt-4 lg:mt-6">
                <Dropdown title="Status :" name="status" id="status" list={['available', 'full booked']} handleChange={handleInput} titleClass="fontPlayfair font-bold text-lg lg:text-2xl mt-2" classSelect="px-4 py-3 lg:py-4 rounded-md bg-gray-200 text-gray-400 text-lg lg:text-2xl focus:outline-none mt-2 lg:mt-4" />
              </div>
              <div className="flex justify-between items-center mt-4 lg:mt-6">
                <label htmlFor="stock" className="fontPlayfair font-bold text-lg lg:text-2xl">Stock :</label>
                <div className="flex items-center justify-between">
                  <button type="button" className="px-2 py-2 w-8 h-8 bg-yellow-400 hover:bg-yellow-500 rounded-md" onClick={() => setStock("plus")}>
                    <Image src="/plus.png" alt="plus" height="20px" width="20px" />
                  </button>
                  <span className="text-2xl font-black mx-8 lg:mx-16">{input.stock}</span>
                  <button type="button" className="px-2 w-8 h-8 bg-gray-300 hover:bg-gray-400 rounded-md flex items-center" onClick={() => setStock("minus")}>
                    <Image src="/minus.png" alt="minus" height="8px" width="20px" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-16">
            <div className="w-5/12 pr-1 lg:pr-4">
              <Dropdown list={dataType.data} name="category" id="category" handleChange={handleInput} classSelect="px-4 w-full h-12 lg:h-20 rounded-md text-white text-lg lg:text-2xl focus:outline-none bg-black font-bold" />
            </div>
            <div className="w-4/12 px-1 lg:px-4">
              <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-base lg:text-2xl h-12 lg:h-20 rounded-lg font-bold">Save item</button>
            </div>
            <div className="w-3/12 pl-1 lg:pl-4">
              <button type="button" className="w-full bg-black text-yellow-500 text-base lg:text-2xl rounded-lg font-bold h-12 lg:h-20" onClick={() => handleDelete(id)}>Delete item</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const type = await fetch(`${process.env.NEXT_BACKEND_API}v1/category`)
  const dataType = await type.json()

  return {
    props: {
      dataType
    }
  }
}

export default EditVehicle;