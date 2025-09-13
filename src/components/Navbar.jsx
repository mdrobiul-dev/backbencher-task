import Button from "./Button";
import { RiArrowDownSLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav aria-label="Main navigation">
      <div className="py-3">
        <div className="w-1/2 h-[56px] flex items-center bg-[#FAFAFAD6] border rounded-lg border-[#E7E7E7] mx-auto pl-5 pr-2">
        <div className="w-4/12">
            <a href="#" aria-label="Go to homepage">
            <img src="https://cdn.prod.website-files.com/675c8e48ca0e0fb5ab421239/67ea1567f801b7bf3d63fad7_zuno-logo-b.svg" alt="logo" className="h-[13px] w-[53px]"/>
        </a>
        </div>
        <div className="w-8/12 flex items-center justify-between">
            <ul className="flex gap-4 text-brand-text/80 font-sans font-semibold text-base ">
                <li>
                    <a href="#">Home</a>
                </li>
                <li className="flex">
                    <a href="#">Pages</a>
                    <RiArrowDownSLine className="text-xl pt-1 font-bold text-brand-text/40"/>
                </li>
                <li className="flex">
                    <a href="#">Template</a>
                    <RiArrowDownSLine className="text-xl pt-1 font-bold text-brand-text/40"/>
                </li>
            </ul>

         <Button />
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
