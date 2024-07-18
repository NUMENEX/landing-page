import { NavLink } from "react-router-dom";
import { NumenexLogo, StarLogo } from "../../assets/svg";
// trigger workflow
export default function Header() {
  const navLink = [
    "Governance",
    "Documentation",
    "Ecosystem",
    "Tokenomics",
    "Marketplaces",
  ];

  return (
    <div className="flex justify-center">
      <div className="flex flex-row justify-between  items-center h-[96px] sm:w-[calc(100%-180px)] px-4 sm:px-0">
        <div className="flex flex-row gap-2 items-center">
          <NumenexLogo className="size-[34px]" />
          <div className="font-manrope text-3xl font-semibold leading-42 text-left ">
            Numenex
          </div>
        </div>
        <div className="gap-6 hidden lg:flex items-center  ">
          {navLink.map((link) => (
            <a className="cursor-pointer">{link}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
