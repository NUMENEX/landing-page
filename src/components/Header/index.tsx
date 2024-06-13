import { NavLink } from "react-router-dom";
import { NumenexLogo, StarLogo } from "../../assets/svg";
// trigger workflow
export default function Header() {
  const navLink = [
    "Governance",
    "Documentation",
    "Eccosystem",
    "Tokenomics",
    "Marketplaces",
  ];

  return (
    <div className="flex justify-center">
      <div className="flex flex-row  items-center h-[96px] sm:w-[calc(100%-180px)] px-4 sm:px-0">
        <div className="flex flex-row gap-2 items-center">
          <NumenexLogo className="size-[34px]" />
          <div className="font-syne text-3xl font-semibold leading-42 text-left ">
            numenex
          </div>
        </div>
        <div className="gap-6 hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
          {navLink.map((link) => (
            <a className="cursor-pointer">{link}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
