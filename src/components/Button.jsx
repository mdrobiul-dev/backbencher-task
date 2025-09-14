import React from "react";

const Button = ({ className = "" }) => {
  return (
    <div
      className={`w-[140px] h-[43px] flex justify-center items-center bg-[#D2F0A3] rounded-lg ${className}`}
    >
      <a href="#" className="text-[15px] font-normal text-[#303A46]">
        Request demo
      </a>
    </div>
  );
};

export default Button;
