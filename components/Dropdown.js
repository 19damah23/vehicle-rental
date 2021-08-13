import { useState } from "react";

const Dropdown = ({ list, giveClass }) => {
  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState(list[0])

  return (
    <div className={`relative ${giveClass}`}>
      <button className="text-black bg-white opacity-25 w-48 h-9 border flex flex-row justify-between items-center rounded pl-1" onClick={() => setShow(!show)}>
        <p>{selected}</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          {!show ? (
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          ) : (
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          )}
        </svg>
      </button>

      <div className={`${show ? 'block' : 'hidden'} absolute z-10 w-48 bg-white py-2 rounded-lg mt-2 shadow-md`}>
        {list && list.map((item) => (
          <li onClick={() => setSelected(item, setShow(!show))} className="list-none px-4 py-2 hover:bg-indigo-500 hover:text-white">
            <a>{item}</a>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;