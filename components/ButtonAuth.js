/* eslint-disable no-unused-vars */
import Image from 'next/image'

const ButtonAuth = ({ giveClass, title, action, google }) => {
  return (
    <button className={`h-12 w-60 lg:h-20 rounded-md lg:w-96 ${giveClass}`} onClick={action}>
      {google
        ? (
        <div className="flex items-center justify-center">
          <div className="w-4 h-4 lg:w-8 lg:h-8 flex items-center mr-1">
            <Image src="/google.png" alt="google" width={30} height={30} />
          </div>
          {title}
        </div>
          )
        : (
            title
          )}
    </button>
  )
}

export default ButtonAuth
