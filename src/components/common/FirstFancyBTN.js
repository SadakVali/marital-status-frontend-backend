import React from "react";

const FirstFancyBTN = ({ text, onClick }) => {
  return (
    <button
      className="bg-richblack-5 rounded-full h-[5.25rem] flex items-center 
      justify-center hover:cursor-pointer min-w-[20rem] px-8"
      onClick={onClick}
      type="submit"
    >
      <p className="font-caveat text-[2.125rem] text-[#0F0F0F]">{text}</p>
    </button>
  );
};

export default FirstFancyBTN;
