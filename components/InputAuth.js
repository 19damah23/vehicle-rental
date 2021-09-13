const InputAuth = ({ type, name, placeholder, giveClass, actionChange }) => {
  return (
    <input type={type} name={name} placeholder={placeholder} className={`h-12 w-60 lg:h-20 lg:w-96 bg-gray-200 shadow-md bg-opacity-30 text-black text-lg lg:text-2xl font-bold rounded-md focus:outline-none place-content-center ${giveClass}`} onChange={actionChange} />
  )
}

export default InputAuth
