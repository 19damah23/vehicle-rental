import Image from "next/image"

const Card = ({ img, name, location }) => {
  return (
    <div className="relative">
      <Image src={img} alt="img" width="275px" height="337px" className="rounded-md" />
      <div className="block absolute bottom-0 left-0 bg-white px-2 py-2 w-44 rounded-r-md">
        <p className="font-semibold text-lg">{name}</p>
        <span className="text-gray-400 text-sm">{location}</span>
      </div>
    </div>
  );
}

export default Card;