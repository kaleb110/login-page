// import Input from "./Input";
import { facebook, twitter, linkedin, email, password } from "../assets";

const Hero = () => (
  <div className="bg-gradient min-h-screen">
    <div className="flex justify-center py-4 sm:py-6 lg:py-7 xl:py-10">
      <div className="flex flex-col justify-center items-center gap-4 lg:gap-6 xl:gap-12 px-5 sm:px-10 py-12 sm:py-16 bg-black w-[70%] md:w-[45%] xl:w-[35%] rounded-xl">
        <h1 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
          LogIn
        </h1>
        <p className="text-slate-500 max-sm:text-sm lg:text-lg xl:text-xl font-normal pb-2 text-center">
          Please enter your login and password
        </p>
        {/* <Input placeholder={`Username`} /> */}
        <div className="relative">
          <img
            src={email}
            alt="Email Logo"
            width={18}
            height={18}
            className="absolute left-6 top-[50%] translate-y-[-50%] "
          />
          <input type="text" className="input" placeholder="Email" />
        </div>
        <div className="relative">
          <img
            src={password}
            alt="Email Logo"
            width={18}
            height={18}
            className="absolute left-6 top-[50%] translate-y-[-50%] "
          />
          <input type="password" className="input" placeholder="Password" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <a
            href="#"
            className="text-slate-500 font-normal pb-6 lg:pb-10 underline text-sm lg:text-lg xl:text-xl"
          >
            Forgot Password?
          </a>

          <button className="inputLogin w-full">LOGIN</button>
        </div>
        <div className="flex justify-center items-center gap-6 lg:gap-10 pt-4">
          <a href="#">
            <img
              src={facebook}
              alt="Facebook Logo"
              width={24}
              height={24}
              className="hover:cursor-pointer"
            />
          </a>
          <a href="#">
            <img
              src={twitter}
              alt="Twitter Logo"
              width={24}
              height={24}
              className="hover:cursor-pointer"
            />
          </a>
          <a href="#">
            <img
              src={linkedin}
              alt="Linkedin Logo"
              width={20}
              height={20}
              className="hover:cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
