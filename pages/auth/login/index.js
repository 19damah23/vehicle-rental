import ButtonAuth from "../../../components/ButtonAuth"
import Footer from "../../../components/Footer"
import InputAuth from "../../../components/InputAuth"

const Login = () => {
  return (
    <>
      <div className="bg-login w-full bg-cover bg-center min-h-screen">
        <div className="container mx-auto flex flex-col lg:flex-row py-24">
          <div className="w-full lg:w-1/2 lg:border-r">
            <h1 className="fontPlayfair text-3xl lg:text-6xl font-bold text-white">Le’ts Explore<br/>The World</h1>
            <p className="text-white lg:mt-11 lg:mb-6 font-bold text-lg lg:text-2xl hidden lg:block">Don’t have account?</p>
            <ButtonAuth title="Sign Up" giveClass="bg-black text-yellow-500 hover:opacity-80 font-black text-lg lg:text-2xl hidden lg:block" />
          </div>
          <div className="w-full lg:w-1/2 lg:text-right mt-6 lg:mt-0">
            <InputAuth placeholder="Email" type="email" name="email" giveClass="px-4"  />
            <InputAuth placeholder="Password" type="password" name="password" giveClass="px-4 mt-4 lg:mt-9"  />
            <p className="fontMulish text-white lg:text-2xl font-bold mt-2 mb-8 lg:mt-3 lg:mb-12">Forgot password?</p>
            <ButtonAuth title="Login" giveClass="bg-yellow-400 hover:bg-yellow-500 font-black text-2xl" />
            <ButtonAuth title="Login with Google" google giveClass="bg-white hover:opacity-80 text-black font-black text-lg lg:text-2xl mt-4 lg:mt-9"  />
            <ButtonAuth title="Sign Up" giveClass="bg-black hover:opacity-80 text-yellow-500 font-black text-lg lg:text-2xl mt-4 lg:mt-9 lg:hidden"  />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;