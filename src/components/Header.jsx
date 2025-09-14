const Header = () => {
  return (
    <section className="my-10 flex justify-center items-center">
      <div className="relative z-[5] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-6 text-center w-full max-w-[780px] h-full mx-0">
        <div className="w-fit bg-[#1313130f] font-sans font-medium py-1.5 px-4 rounded-[200px]">
          Personal Growth
        </div>

        <div className="w-full max-w-[780px] flex flex-col items-center gap-6">
          <h1
            className="
      tracking-[-0.03em] mt-0 mb-0 font-sans font-bold leading-[1] text-center
      text-[32px] sm:text-[48px] md:text-[72px] lg:text-[100px]
    "
          >
            Feel more
            <br />
            <span className="whitespace-nowrap">human every day</span>
          </h1>

          <button
            className="
      mx-auto flex justify-center items-center
      text-[#415326] bg-[#d2f0a3]
      rounded-full px-[36px] py-4
      text-[16px] font-medium
    "
          >
            Request demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
