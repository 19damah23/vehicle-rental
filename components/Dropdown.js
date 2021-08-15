import { useState } from "react";

const Dropdown = ({ list, giveClass, classBody, classList, classSelect }) => {
  const [show, setShow] = useState(false)
  const [selected, setSelected] = useState(list[0])

  return (
    <div className={`relative ${giveClass}`}>
      <button className={`border flex flex-row justify-between items-center pl-1 ${classBody ? classBody : ''}`} onClick={() => setShow(!show)}>
        <p className={classSelect}>{selected}</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          {!show ? (
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          ) : (
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          )}
        </svg>
      </button>

      <div className={`${show ? 'block' : 'hidden'} absolute z-10 w-48 bg-white py-2 rounded-lg mt-2 shadow-md ${classList ? classList : ''}`}>
        {list && list.map((item, index) => (
          <li onClick={() => setSelected(item, setShow(!show))} className="list-none px-4 py-2 hover:bg-indigo-500 hover:text-white" key={index}>
            <a>{item}</a>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;