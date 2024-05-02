import { StarLogo } from "../../assets/svg";

export default function Header() {
  return (
    <div className="flex flex-row  md:flex-row py-5 px-5 md:px-20 justify-between items-center ">
      <div className="flex flex-row  gap-2  ">
        <StarLogo />
        <div className="font-syne text-3xl font-semibold leading-42 text-left">
          numenex
        </div>
      </div>

      <div className="flex flex-row  gap-4  hidden lg:flex">
        <a>How it works</a>
        <a>Product</a>
        <a>Service</a>
        <a>Learn</a>
        <a>Blog</a>
        <a>About</a>
      </div>

      <div className="flex flex-row gap-2 ">
        <div className="py-1">
          <div className="primaryButton"> Log In</div>
        </div>
        <div className="py-1">
          <div className="secondaryButton"> Sign Up</div>
        </div>
      </div>
    </div>
  );
}
