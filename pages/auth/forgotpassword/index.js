/* eslint-disable no-unused-vars */
import Image from 'next/image'
import Footer from '../../../components/Footer'
import InputAuth from '../../../components/InputAuth'
import ButtonAuth from '../../../components/ButtonAuth'

const ForgotPassword = () => (
    <>
      <div className="bg-forgot min-h-screen">
        <div className="bg-black bg-opacity-30 w-full min-h-screen">
          <div className="container mx-auto">
            <div className="flex items-center justify-start pt-20">
              <div className="mr-4 lg:mr-8 flex items-center">
                <Image src="/back.png" alt="back" height={30} width={20} />
              </div>
              <span className="font-bold text-2xl text-white opa">Back</span>
            </div>

            <div className="flex flex-col items-center justify-center mt-10">
              <h1 className="fontPlayfair font-bold text-6xl text-white">Do’t worry, we got your back!</h1>
              <InputAuth type="email" name="email" placeholder="Email" giveClass="px-4 lg:mt-12 placeholder-white" />
              <ButtonAuth title="Send Link" giveClass="lg:w-96 h-20 bg-yellow-400 hover:bg-yellow-500 font-black lg:text-2xl lg:mt-7 lg:mb-12" />
              <span className="text-white font-black lg:text-2xl">You will receive a link to reset your password.<br/>
If you haven’t received any link, click Resend Link</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
)

export default ForgotPassword
