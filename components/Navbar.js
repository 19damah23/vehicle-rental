import Image from "next/image"
import Link from 'next/link'
import { useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)

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
                {!isMobile ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                ) : (
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
              <Link href="/category">
                Vehicle Type
              </Link>
            </li>
            <li className="mt-5 lg:mt-0 lg:mr-8 text-gray-600 hover:text-black focus:text-black text-base">
              <Link href="/history">
                History
              </Link>
            </li>
            <li className="mt-5 lg:mt-0 lg:mr-10 text-gray-600 hover:text-black focus:text-black text-base">
              <Link href="/about">
                About
              </Link>
            </li>
            <li className="mt-5 lg:mt-0 lg:mr-5 border border-yellow-400 hover:bg-yellow-400 focus:bg-yellow-400 text-base w-28 h-10 flex items-center justify-center rounded-md">
              <Link href="/login">
                Login
              </Link>
            </li>
            <li className="mt-5 lg:mt-0 border border-yellow-400 hover:bg-yellow-400 focus:bg-yellow-400 text-base w-28 h-10 flex items-center justify-center rounded-md">
              <Link href="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar