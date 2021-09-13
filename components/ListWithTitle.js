/* eslint-disable no-unused-vars */
import Link from 'next/link'

const ListWithTitle = ({ title, list }) => {
  return (
    <>
      <h5 className="font-bold text-lg">{title}</h5>
        <ul>
        {list && list.map((item, index) => (
          <li className="list-none text-gray-400 font-base text-xs md:text-sm lg:text-base my-2" key={index}>
            <Link href={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListWithTitle
