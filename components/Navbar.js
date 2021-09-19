/* eslint-disable no-unused-vars */
import cookies from 'next-cookies'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import backendApi from '../pages/api/backendApi'

const Navbar = (ctx, { profile }) => {
  const { userId, role } = cookies(ctx)
  const [isMobile, setIsMobile] = useState(false)
  const [show, setShow] = useState(false)
  const [avatar, setAvatar] = useState('')
  const router = useRouter()

  useEffect(() => {
    console.log('oke')
    backendApi.get(`users/${userId}`, {
      withCredentials: true
    })
      .then((res) => {
        setAvatar(res.data.data[0].avatar)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }, [profile])

  const logout = () => {
    backendApi.get('auth/logout', {
      withCredentials: true
    })
      .then((res) => {
        router.push('/login')
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  return (
    <nav className="sm:h-20 md:h-28 lg:h-28 fixed bg-white z-10 w-full top-0 py-2 flex items-center">
      <div className="xs:container sm:container md:container lg:container xl:container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-row justify-between items-center w-full lg:w-auto border-b lg:border-b-0">
          <div>
            <Link href="/">
              <a>
                <Image src="/logo.jpg" alt="logo" width="41px" height="41px" />
              </a>
            </Link>
          </div>

          <div>
            <button onClick={() => setIsMobile(!isMobile)} className="focus:outline-none text-black block lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {!isMobile
                  ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )
                  : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`${isMobile === true ? 'block' : 'hidden'} lg:block ml-auto z-10`}>
          <ul className="flex flex-col lg:flex-row justify-between items-center">
            <li className="mt-5 lg:mt-0 lg:mr-8 text-gray-600 hover:text-black focus:text-black text-base">
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="mt-5 lg:mt-0 lg:mr-8 text-gray-600 hover:text-black focus:text-black text-base">
              <Link href={role === 'admin' ? '/admin/vehicle' : '/vehicle'}>
                Vehicle Type
              </Link>
            </li>
            <li className="mt-5 lg:mt-0 lg:mr-8 text-gray-600 hover:text-black focus:text-black text-base">
              <Link href={role === 'admin' ? '/admin/history' : '/history'}>
                History
              </Link>
            </li>
            <li className="mt-5 lg:mt-0 lg:mr-10 text-gray-600 hover:text-black focus:text-black text-base">
              <Link href="/about">
                About
              </Link>
            </li>
            <div className="flex flex-col lg:flex-row">
              <li className="mt-5 lg:mt-0 lg:mr-5">
                <Link href="/chat">
                  <Image src="/email.png" width={45} height={40} alt="chat" />
                </Link>
              </li>
              <li className="mt-5 lg:mt-0 text-base relative">
                <div>
                  <button onClick={() => setShow(!show)} className="w-10 h-10 object-contain">
                    <img src={avatar ? `https://vehicle.muchamadagushermawan.online/files/${avatar}` : '/people.png'} alt="profile" className="rounded-full h-full w-full object-cover" />
                  </button>
                </div>
                <div className={`${show === true ? 'block' : 'hidden'} ml-auto absolute z-10 bg-white rounded-md`}>
                  <ul>
                    <li className="hover:bg-indigo-600 px-8 py-2 rounded-md hover:text-white">
                      <Link href="/profile">
                        <a>
                          Profile
                        </a>
                      </Link>
                    </li>
                    <li className="hover:bg-indigo-600 px-8 py-2 rounded-md hover:text-white">
                      <button onClick={logout}>
                        <a>
                          Logout
                        </a>
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
