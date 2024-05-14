// import Input from "./Input";
import { facebook, twitter, linkedin } from "../assets";

const Hero = () => (
  <div className="bg-gradient min-h-screen">
    <div className="flex justify-center py-14">
      <div className="flex flex-col justify-center items-center gap-4 border border-black max-sm:padding-x padding-y bg-black w-[50%] max-md:w-[60%]">
        <h1 className="text-white text-3xl">LOGIN</h1>
        <p className="text-slate-500 font-normal pb-4 text-center">
          Please enter your login and password
        </p>
        {/* <Input placeholder={`Username`} /> */}
        <div>
          <input type="text" className="input" placeholder="Username" />
        </div>
        <div>
          <input type="text" className="input" placeholder="Password" />
        </div>
        <div className="flex flex-col items-center justify-center ">
          <a href="/" className="text-slate-500 font-normal pb-4 underline">
            Forgot Password?
          </a>

          <input
            type="text"
            className="inputLogin max-sm:w-full "
            placeholder="Login"
          />
        </div>
        <div className="flex justify-center items-center gap-6 pt-6">
          <img
            src={facebook}
            alt="Facebook Logo"
            width={24}
            height={24}
            className="hover:cursor-pointer"
          />
          <img
            src={twitter}
            alt="Twitter Logo"
            width={24}
            height={24}
            className="hover:cursor-pointer"
          />
          <img
            src={linkedin}
            alt="Linkedin Logo"
            width={24}
            height={24}
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
