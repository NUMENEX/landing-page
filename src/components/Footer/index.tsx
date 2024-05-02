import { StarLogo, StarWhiteLogo, TelegramLogo } from "@src/assets/svg";

export default function Footer() {
  return (
    <div className="bg-primary p-20 text-white ">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  justify-between gap-20 ">
        <div className="flex flex-col w-[350px] gap-5 ">
          <div className="font-syne text-[35px] ">
            {" "}
            Subscribe to our Newsletter
          </div>
          <div className="font-poppins text-base font-normal leading-26 tracking-tighter text-left text-gray-300">
            Stay in the loop with our Numenex newsletter, where we deliver
            bite-sized insights under this project.
          </div>

          <div className="flex flex-row gap-5">
            <input
              type="text"
              className=" p-5 rounded-full  bg-white text-secondary "
              placeholder="mail@gmail.com"
            ></input>
            <button className=" py-5 px-10 rounded-full  bg-purple-900 hover:bg-white hover:text-primary">
              Subscribe
            </button>
          </div>
        </div>
        <div className=" ">
          {" "}
          <div className="grid grid-cols-3  gap-5  text-gray_light ">
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              Roadmap
            </a>
            <a href="#" className="hover:underline">
              Help Center
            </a>
            <a href="#" className="hover:underline">
              How it works
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
            <a href="#" className="hover:underline">
              Support
            </a>
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              FAQ
            </a>
          </div>
        </div>

        <div className="flex flex-col w-[350px] gap-10 lg:items-end ">
          <div className="flex flex-row  gap-5 items-center  ">
            <StarWhiteLogo />
            <div className="font-syne text-[35px] font-semibold leading-42 text-left">
              numenex
            </div>
          </div>
          <div>
            <div className=" bg-opacity-20  p-2 bg-white rounded-full inline-block">
              <div className="flex flex-row items-center">
                <div className=" bg-white rounded-full p-2">
                  <TelegramLogo />
                </div>
                <div className=" px-5">Join our Community</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
