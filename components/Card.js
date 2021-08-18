import Image from "next/image"

const Card = ({ img, name, location, giveClass, loader, index }) => {
  return (
    <div className={`relative ${giveClass ? giveClass : ''}`} key={index}>
      <div className="w-36 h-40 lg:w-72 lg:h-80 mx-auto">
        <Image loader={loader} src={img} alt="img" width="275px" height="337px" className="rounded-md" />
      </div>
      <div className="block absolute -bottom-6 lg:-bottom-6 left-3 lg:left-0 bg-white px-2 py-2 w-24 lg:w-44 rounded-r-md">
        <p className="font-semibold text-base lgtext-lg">{name}</p>
        <span className="text-gray-400 text-xs lg:text-sm">{location}</span>
      </div>
    </div>
  );
}

export default Card;