/* eslint-disable no-unused-vars */
import Image from 'next/image'

const Card = ({ img, name, location, giveClass, loader, index }) => {
  return (
    <div className={`relative ${giveClass || ''}`} key={index}>
      <div className="w-36 h-40 lg:w-72 lg:h-80 mx-auto object-contain">
        <img src={img} alt="img" className="rounded-md h-full w-full object-cover" />
      </div>
      <div className="block absolute -bottom-6 lg:-bottom-6 left-0 lg:left-0 bg-white px-2 py-2 w-24 lg:w-44 rounded-r-md">
        <p className="font-semibold text-base lgtext-lg">{name}</p>
        <span className="text-gray-400 text-xs lg:text-sm">{location}</span>
      </div>
    </div>
  )
}

export default Card
