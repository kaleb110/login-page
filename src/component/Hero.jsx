// import Input from "./Input";
import { facebook, twitter, linkedin, email, password } from "../assets";

const Hero = () => (
  <div className="bg-gradient min-h-screen">
    <div className="flex justify-center p-5">
      <form className="flex flex-col justify-center items-center gap-4 lg:gap-6 xl:gap-12 px-5 sm:px-12 py-14 bg-black  rounded-xl">
        <h1 className="text-white text-3xl md:text-4xl font-bold">LogIn</h1>
        <p className="text-slate-500 text-lg lg:text-2xl font-normal pb-8 text-center">
          Please enter your login and password
        </p>
        <div className="relative">
          <img
            src={email}
            alt="Email Logo"
            width={18}
            height={18}
            className="absolute left-6 top-[50%] translate-y-[-50%]"
          />
          <input
            type="email"
            id="email"
            name="email"
            className="input"
            placeholder="Email"
            required
          />
        </div>
        <div className="relative">
          <img
            src={password}
            alt="Email Logo"
            width={18}
            height={18}
            className="absolute left-6 top-[50%] translate-y-[-50%] "
          />
          <input
            type="password"
            id="password"
            name="password"
            className="input"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <a
            href="#"
            className="text-slate-500 font-normal pb-10 underline text-md md:text-lg lg:text-xl xl:text-2xl hover:text-slate-400"
          >
            Forgot Password?
          </a>

          <button className="inputLogin w-full">LOGIN</button>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 pt-12">
          <p className="text-slate-500 max-sm:text-sm lg:text-lg xl:text-xl font-normal text-center">
            Or Sign Up Using
          </p>
          <div className="flex justify-center items-center gap-8 lg:gap-14">
            <a href="#" className="hover:cursor-pointer">
              <img src={facebook} alt="Facebook Logo" width={28} height={28} />
            </a>
            <a href="#" className="hover:cursor-pointer">
              <img src={twitter} alt="Twitter Logo" width={28} height={28} />
            </a>
            <a href="#" className="hover:cursor-pointer">
              <img src={linkedin} alt="Linkedin Logo" width={24} height={24} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 pt-20">
          <p className="text-slate-500 max-sm:text-sm lg:text-lg xl:text-xl font-normal text-center">
            Or Sign Up Using
          </p>
          <a
            href="#"
            className="text-slate-500 max-sm:text-sm lg:text-lg xl:text-xl font-normal text-center hover:text-slate-400"
          >
            SIGNUP
          </a>
        </div>
      </form>
    </div>
  </div>
);

export default Hero;
