const InputAuth = ({ type, name, placeholder, giveClass }) => {
  return (
    <input type={type} name={name} placeholder={placeholder} className={`h-12 w-60 lg:h-20 lg:w-96 bg-white border shadow-md opacity-80 text-gray-500 text-lg lg:text-2xl font-bold rounded-md focus:outline-none ${giveClass}`} />
  );
}

export default InputAuth;