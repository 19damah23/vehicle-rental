import Link from "next/link"

const ListWithTitle = ({ title, list }) => {
  return (
    <>
      <h5 className="font-bold text-lg">{title}</h5>
        <ul>
        {list && list.map((item, index) => (
          <li className="list-none text-gray-400 font-base my-2" key={index}>
            <Link href={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListWithTitle;