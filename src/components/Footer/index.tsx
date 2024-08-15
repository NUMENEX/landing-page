import React from "react";

export default function Footer() {
  return (
    <div className="fixed left-0 bottom-0 flex items-center font-poppins text-base font-normal text-black leading-[24px] w-full justify-between h-[84px] bg-[#FFFFFFF2] px-[160px]">
      <p>Copyright Numenex</p>
      <div className="flex items-center gap-6">
        <p>Documentation</p>
        <p>Community</p>
      </div>
    </div>
  );
}
