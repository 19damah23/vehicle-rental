/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { ToastContainer, toast, Zoom } from 'react-toastify'
import ButtonAuth from '../../../components/ButtonAuth'
import Footer from '../../../components/Footer'
import InputAuth from '../../../components/InputAuth'
import backendApi from '../../api/backendApi'
import 'react-toastify/dist/ReactToastify.css'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

const Login = () => {
  const router = useRouter()
  const [cookie, setCookie] = useCookies(['token', 'userId', 'role', 'isAuth'])
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    e.preventDefault()
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    backendApi
      .post('auth/login', form, { withCredentials: true })
      .then((res) => {
        const userId = res.data.user.id
        const token = res.data.token
        setCookie('userId', userId, {
          path: '/',
          maxAge: 7200000,
          sameSite: true
        })
        setCookie('role', res.data.user.role, {
          path: '/',
          maxAge: 7200000,
          sameSite: true
        })
        setCookie('isAuth', true, {
          path: '/',
          maxAge: 7200000,
          sameSite: true
        })
        setCookie('token', token, {
          path: '/',
          maxAge: 7200000,
          sameSite: true
        })
        router.push('/')
      })
      .catch((error) => {
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER
        })
      })
  }

  const handleRegister = () => {
    router.push('/register')
  }

  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <div className="bg-login w-full bg-cover bg-center min-h-screen">
        <div className="container mx-auto flex flex-col lg:flex-row py-24">
          <div className="w-full lg:w-1/2 lg:border-r">
            <h1 className="fontPlayfair text-3xl lg:text-6xl font-bold text-white">
              Le’ts Explore
              <br />
              The World
            </h1>
            <p className="text-white lg:mt-11 lg:mb-6 font-bold text-lg lg:text-2xl hidden lg:block">
              Don’t have account?
            </p>
            <ButtonAuth
              title="Sign Up"
              giveClass="bg-black text-yellow-500 hover:opacity-80 font-black text-lg lg:text-2xl hidden lg:block"
              action={() => handleRegister()}
            />
          </div>
          <div className="w-full lg:w-1/2 lg:text-right mt-6 lg:mt-0">
            <InputAuth
              placeholder="Email"
              type="email"
              name="email"
              giveClass="px-4"
              actionChange={handleChange}
            />
            <InputAuth
              placeholder="Password"
              type="password"
              name="password"
              giveClass="px-4 mt-4 lg:mt-9"
              actionChange={handleChange}
            />
            <p className="fontMulish text-white lg:text-2xl font-bold mt-2 mb-8 lg:mt-3 lg:mb-12">
              Forgot password?
            </p>
            <ButtonAuth
              title="Login"
              giveClass="bg-yellow-400 hover:bg-yellow-500 font-black text-2xl"
              action={handleSubmit}
            />
            <ButtonAuth
              title="Login with Google"
              google
              giveClass="bg-white hover:opacity-80 text-black font-black text-lg lg:text-2xl mt-4 lg:mt-9"
            />
            <ButtonAuth
              title="Sign Up"
              giveClass="bg-black hover:opacity-80 text-yellow-500 font-black text-lg lg:text-2xl mt-4 lg:mt-9 lg:hidden"
              action={() => handleRegister()}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Login
