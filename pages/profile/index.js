/* eslint-disable no-unused-vars */
import Image from 'next/image'
import cookies from 'next-cookies'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ToastContainer, toast, Zoom } from 'react-toastify'
import backendApi from '../api/backendApi'
import { requireAuthentication } from '../../HOC/requireAuthentication/requireAuthentication'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import 'react-toastify/dist/ReactToastify.css'

const Profile = ({ data }, context) => {
  const router = useRouter()
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    avatar: '',
    address: '',
    birth: '',
    createdAt: '',
    avatarPreview: ''
  })

  useEffect(() => {
    setProfile({
      ...profile,
      name: data[0].name,
      email: data[0].email,
      phone: data[0].phone,
      gender: data[0].gender,
      avatar: data[0].avatar,
      address: data[0].address,
      birth: data[0].birth,
      createdAt: data[0].createdAt
    })
  }, [data])

  const handleInput = (e) => {
    e.preventDefault()
    console.log(e.target.name, e.target.value)
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    })
  }

  const handleInputFile = (e) => {
    console.log(e)
    setProfile({
      ...profile,
      avatar: e.target.files[0],
      avatarPreview: URL.createObjectURL(e.target.files[0])
    })
  }

  const handleSubmit = () => {
    const { userId } = cookies(context)

    const files = document.querySelector('input[type="file"]').files[0]
    const data = new FormData()
    data.append('name', profile.name)
    data.append('email', profile.email)
    data.append('phone', profile.phone)
    data.append('address', profile.address)
    data.append('gender', profile.gender)
    data.append('birth', profile.birth)
    data.append('avatar', files)

    backendApi
      .patch(`users/${userId}`, data, {
        withCredentials: true,
        origin: ['https://vehicle.muchamadagushermawan.online']
      })
      .then((res) => {
        backendApi
          .get(`users/${userId}`, {
            withCredentials: true,
            origin: ['https://vehicle.muchamadagushermawan.online']
          })
          .then((res) => {
            const { data } = res.data
            setProfile({
              ...profile,
              name: data[0].name,
              email: data[0].email,
              phone: data[0].phone,
              gender: data[0].gender,
              avatar: data[0].avatar,
              address: data[0].address,
              birth: data[0].birth,
              createdAt: data[0].createdAt
            })

            toast.success('Success update profile!', { position: toast.POSITION.TOP_CENTER })

            setTimeout(() => {
              router.push('/')
            }, 2500)
          })
          .catch((error) => {
            console.log(error.response)
            toast.error(error.response.data.message, {
              position: toast.POSITION.TOP_CENTER
            })
          })
      })
      .catch((error) => {
        console.log(error)
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER
        })
      })
  }

  return (
    <>
      <ToastContainer draggable={false} transition={Zoom} autoClose={2000} />
      <Navbar image={profile} />

      <div className="xs:container sm:container md:container lg:container xl:container mx-auto flex flex-col mt-20 lg:mt-28">
        <h3 className="text-2xl lg:text-4xl font-bold">Profile</h3>

        <div className="flex flex-col items-center mt-8 lg:mt-11">
          <div className="relative w-36 h-36 lg:w-52 lg:h-52">
            {profile.avatarPreview
              ? (
              <img
                src={profile.avatarPreview}
                alt="camera"
                className="w-full h-full rounded-full"
              />
                )
              : (
              <Image
                src={
                  profile.avatar !== null
                    ? `https://vehicle.muchamadagushermawan.online/files/${profile.avatar}`
                    : '/people.png'
                }
                alt="people"
                width="215px"
                height="215px"
                className="rounded-full"
              />
                )}
            <label htmlFor="avatar" className="flex items-center flex-col">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 bottom-0"
              >
                <circle cx="25" cy="25" r="25" fill="#FFCD61" />
                <path
                  d="M29.1038 16.7103C29.3158 16.4851 29.5674 16.3065 29.8443 16.1846C30.1212 16.0627 30.418 16 30.7177 16C31.0174 16 31.3142 16.0627 31.5911 16.1846C31.868 16.3065 32.1196 16.4851 32.3315 16.7103C32.5435 16.9354 32.7116 17.2028 32.8263 17.497C32.941 17.7912 33 18.1065 33 18.425C33 18.7434 32.941 19.0588 32.8263 19.353C32.7116 19.6472 32.5435 19.9145 32.3315 20.1397L21.4381 31.714L17 33L18.2104 28.2845L29.1038 16.7103Z"
                  stroke="#393939"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </label>
            <input
              type="file"
              name="avatar"
              id="avatar"
              className="hidden"
              onChange={handleInputFile}
            />
          </div>
          <h5 className="fontPlayfair text-3xl lg:text-5xl font-bold mt-4 lg:mt-6 text-center">
            {profile.name}
          </h5>
          <p className="font-bold text-lg lg:text-2xl text-gray-400 mt-4 lg:mt-6">
            {profile.email}
          </p>
          <p className="font-bold text-lg lg:text-2xl text-gray-400 mt-0 lg:mt-1">
            {profile.phone !== null ? profile.phone : ''}
          </p>
          <p className="font-bold text-lg lg:text-2xl text-gray-400 mt-0 lg:mt-1">
            Has been active since {profile.createdAt.slice(0, 4)}
          </p>
        </div>
        <div className="flex justify-center mt-5 lg:mt-10">
          <div className="mx-10 lg:mx-20 flex items-center">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={profile.gender === 'male'}
              className="w-4 h-4 lg:w-7 lg:h-7"
              onChange={handleInput}
            />
            <label htmlFor="male" className="ml-2 lgml-5 text-lg lg:text-2xl">
              Male
            </label>
          </div>
          <div className="mx-10 lg:mx-20 flex items-center">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={profile.gender === 'female'}
              className="w-4 h-4 lg:w-7 lg:h-7"
              onChange={handleInput}
            />
            <label htmlFor="female" className="ml-2 lgml-5 text-lg lg:text-2xl">
              Female
            </label>
          </div>
        </div>
        <div className="flex flex-col mt-12 lg:mt-20">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-gray-400 text-lg lg:text-2xl"
            >
              Email address :
            </label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Email address"
              className="py-2 lg:py-4 border-b focus:outline-none bg-white border-black text-black text-lg lg:text-2xl"
              value={profile.email}
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label
              htmlFor="address"
              className="text-gray-400 text-lg lg:text-2xl"
            >
              Address :
            </label>
            <input
              id="address"
              type="text"
              name="address"
              placeholder="Address"
              className="py-2 lg:py-4 border-b focus:outline-none bg-white border-black text-black text-lg lg:text-2xl"
              value={profile.address}
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label
              htmlFor="phone"
              className="text-gray-400 text-lg lg:text-2xl"
            >
              Mobile number :
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
              placeholder="Mobile number"
              className="py-2 lg:py-4 border-b focus:outline-none bg-white border-black text-black text-lg lg:text-2xl"
              value={profile.phone !== null ? profile.phone : ''}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="flex flex-col mt-9 lg:mt-16">
          <h3 className="text-2xl font-extrabold">Identity</h3>
          <di className="flex justify-between">
            <div className="flex flex-col mt-4 w-1/2 pr-4 lg:pr-9">
              <label
                htmlFor="name"
                className="text-gray-400 text-lg lg:text-2xl"
              >
                Display name :
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Display name"
                className="py-2 lg:py-4 border-b focus:outline-none bg-white border-black text-black text-lg lg:text-2xl"
                value={profile.name}
                onChange={handleInput}
              />
            </div>
            <div className="flex flex-col mt-4 w-1/2 pl-4 lg:pl-9">
              <label
                htmlFor="birth"
                className="text-gray-400 text-lg lg:text-2xl"
              >
                MM/DD/YYYY
              </label>
              <input
                id="birth"
                type="date"
                name="birth"
                placeholder="Birth date"
                className="py-2 lg:py-4 border-b focus:outline-none bg-white border-black text-black text-lg lg:text-2xl"
                value={profile.birth !== null ? profile.birth : ''}
                onChange={handleInput}
              />
            </div>
          </di>
        </div>

        <div className="flex justify-between my-12 lg:my-24">
          <button
            type="button"
            className="bg-yellow-300 hover:bg-yellow-400 py-3 lg:py-6 rounded-lg font-black text-sm lg:text-2xl w-28 lg:w-80"
            onClick={handleSubmit}
          >
            Save Change
          </button>
          <button
            type="button"
            className="bg-black hover:opacity-80 text-yellow-300 hover:text-yellow-500 py-3 lg:py-6 rounded-lg font-black text-sm lg:text-2xl w-28 lg:w-80"
          >
            Edit Password
          </button>
          <button
            type="button"
            className="bg-gray-300 hover:bg-gray-400 text-black py-3 lg:py-6 rounded-lg font-black text-sm lg:text-2xl w-28 lg:w-80"
          >
            Cancel
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Profile

export const getServerSideProps = requireAuthentication(async (ctx) => {
  const { userId, token } = cookies(ctx)

  const user = await fetch(
    `${process.env.NEXT_BACKEND_API}v1/users/${userId}`,
    {
      withCredentials: true,
      headers: {
        Cookie: `token=${token}`
      }
    }
  )
  const data = await user.json()

  return {
    props: data
  }
})
