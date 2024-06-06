import { NavLink } from "react-router-dom";
import { StarLogo } from "../../assets/svg";

export default function Header() {
  const navLink = [
    "How it works",
    "Product",
    "Service",
    "Learn",
    "Blog",
    "About",
  ];

  return (
    <div className="flex justify-center">
      <div className="flex flex-row  items-center h-[96px] w-[calc(100%-180px)]">
        <div className="flex flex-row gap-2 items-center ">
          <StarLogo />
          <div className="font-syne text-3xl font-semibold leading-42 text-left">
            numenex
          </div>
        </div>
        <div className="gap-6  hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
          {navLink.map((link) => (
            <a className="cursor-pointer">{link}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
