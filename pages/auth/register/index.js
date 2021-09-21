/* eslint-disable no-unused-vars */
import InputAuth from '../../../components/InputAuth'
import ButtonAuth from '../../../components/ButtonAuth'
import Image from 'next/image'
import { useState } from 'react'
import backendApi from '../../api/backendApi'
import { ToastContainer, toast, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { requireAuthenticationAuth } from '../../../HOC/requireAuthentication/requireAuthentication'

const Register = () => {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleInput = (e) => {
    e.preventDefault()
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    backendApi
      .post('auth/register', form, {
        withCredentials: true
      })
      .then((res) => {
        router.push('/login')
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER
        })
      })
  }

  const handleLogin = () => {
    router.push('/login')
  }
  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <div className="flex">
        <div className="bg-register bg-cover w-1/2 bg-bottom min-h-screen hidden lg:block"></div>
        <div className="w-full lg:w-1/2 bg-register lg:bg-none min-h-screen bg-cover bg-center">
          <div className="container mx-auto py-20 lg:py-24 lg:px-24 ">
            <h1 className="fontPlayfair text-3xl lg:text-6xl font-bold text-black">
              Sign Up
            </h1>
            <InputAuth
              type="text"
              name="name"
              placeholder="Name"
              giveClass="px-4 mt-8 lg:mt-16"
              actionChange={handleInput}
            />
            <InputAuth
              type="email"
              name="email"
              placeholder="Email"
              giveClass="px-4 mt-4 lg:mt-9"
              actionChange={handleInput}
            />
            <InputAuth
              type="password"
              name="password"
              placeholder="Password"
              giveClass="px-4 mt-4 lg:mt-9"
              actionChange={handleInput}
            />
            <ButtonAuth
              title="Sign Up"
              giveClass="bg-yellow-400 text-black hover:bg-yellow-500 font-black text-lg lg:text-2xl mt-6 lg:mt-12"
              action={handleSubmit}
            />
            <p className="fontMulish text-black text-lg lg:text-2xl font-bold my-6 lg:my-9">
              or try another way
            </p>
            <ButtonAuth
              title="Login with Google"
              google
              giveClass="bg-white hover:opacity-80 text-black font-black text-lg lg:text-2xl shadow-lg"
            />
            <ButtonAuth
              title="Login"
              giveClass="bg-black text-yellow-500 hover:opacity-80 font-black text-2xl mt-4 lg:mt-9"
              action={() => handleLogin()}
            />
            <p></p>
          </div>

          <footer className="bg-gray-100">
            <div className="container mx-auto lg:px-8 pt-4 lg:pt-8">
              <div className="w-full">
                <Image src="/logo2.png" alt="logo" width="42px" height="42px" />
                <p className="text-gray-400 font-base text-xs md:text-sm lg:text-base my-2 mb-12">
                  Plan and book your perfect trip with
                  <br />
                  expert advice, travel tips for vehicle
                  <br />
                  information from us
                </p>
                <p className="text-gray-400 font-base text-xs md:text-sm lg:text-base my-2">
                  ©2020 Vehicle Rental Center. All rights reserved
                </p>
              </div>
              <hr />
              <div className="flex justify-center items-center h-20">
                <div className="mx-4 cursor-pointer">
                  <Image
                    src="/twitter.png"
                    alt="twitter"
                    width="30px"
                    height="20px"
                  />
                </div>
                <div className="mx-4 cursor-pointer">
                  <Image src="/fb.png" alt="fb" width="10px" height="20px" />
                </div>
                <div className="mx-4 cursor-pointer">
                  <Image src="/ig.png" alt="ig" width="20px" height="20px" />
                </div>
                <div className="mx-4 cursor-pointer">
                  <Image
                    src="/linkedin.png"
                    alt="linkedin"
                    width="30px"
                    height="20px"
                  />
                </div>
                <div className="mx-4 cursor-pointer">
                  <Image src="/yt.png" alt="yt" width="30px" height="20px" />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Register

export const getServerSideProps = requireAuthenticationAuth(
  async (ctx) => {
    return {
      props: {}
    }
  }
)
