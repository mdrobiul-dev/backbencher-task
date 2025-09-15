import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      document.documentElement.classList.add("w-mod-touch");
    }
  }, []);

  return (
    <div className="flex flex-col gap-x-6 gap-y-6 text-center justify-center items-center w-full h-auto min-h-[70vh] overflow-hidden pt-[60px] md:pt-[100px]">
      <div className="flex flex-col gap-x-6 gap-y-6 text-center justify-center items-center w-full max-w-[780px] h-full relative mx-0">
        <div className="bg-[#1313130f] text-sm font-medium px-4 py-1.5 rounded-[200px]">
          Personal Growth
        </div>

        <h1 className="text-[#303a46] tracking-[-0.03em] text-[clamp(2.8rem,8vw,6rem)] font-bold leading-none my-0 font-sans">
          Feel more human every day
        </h1>

        <a
          href="#"
          className="max-w-full text-[#415326] bg-[#d2f0a3] flex justify-center items-center text-base font-medium no-underline px-[30px] py-4 rounded-[100px] hover:bg-[#c1e88d] transition-colors"
        >
          Request demo
        </a>
      </div>
    </div>
  );
};

export default Header;

