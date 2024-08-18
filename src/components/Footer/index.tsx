import React from "react";

export default function Footer() {
  return (
    <div className="fixed left-0 bottom-0 flex items-center font-poppins text-base font-normal text-black leading-[24px] w-full justify-between h-[84px] bg-[#FFFFFFF2] px-[160px]">
      <p>© 2024 Numenex. All rights reserved.</p>
      <div className="flex items-center gap-6">
        <p
          className="cursor-pointer hover:underline hover:underline-offset-4"
          onClick={() =>
            window.open(
              "https://github.com/NUMENEX/numx-subnet-commune/blob/feat/initial_phase_with_ui/README.md",
              "_blank",
              "noopener"
            )
          }
        >
          Documentation
        </p>
        <p
          className="cursor-pointer hover:underline hover:underline-offset-4"
          onClick={() =>
            window.open(
              "https://stats.communex.ai/subnets/19/modules",
              "_blank",
              "noopener"
            )
          }
        >
          Stats
        </p>
      </div>
    </div>
  );
}
