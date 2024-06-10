import {
  NumenexLogo,
  StarLogo,
  StarWhiteLogo,
  TelegramLogo,
} from "@src/assets/svg";

export default function Footer() {
  return (
    <div className="bg-primary p-4 sm:p-20 text-white ">
      <div className="flex justify-between gap-8 lg:gap-[140px] flex-col lg:flex-row">
        <div className="flex flex-col w-[350px] gap-5">
          <div className="font-syne text-[35px]">
            Subscribe to our Newsletter
          </div>
          <p className="font-poppins text-base font-normal tracking-tighter text-left text-gray-300 break-words">
            Stay in the loop with our Numenex newsletter, where we deliver
            bite-sized insights under this project.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <input
              type="text"
              className="h-16 px-6 rounded-full  bg-white text-secondary "
              placeholder="mail@gmail.com"
            />
            <button className="h-16 px-8 rounded-full  bg-buttonBg">
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

        <div className="flex flex-col gap-4 lg:gap-10 lg:items-end ">
          <div className="flex flex-row gap-5 items-center ">
            <NumenexLogo className="size-[34px]" />
            <div className="font-syne text-3xl font-semibold leading-42 text-left">
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
