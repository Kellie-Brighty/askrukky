import React from "react";

const SectionFour = () => {
  return (
    <div
      className={`w-[100%] h-[537px] md:h-[374px] bg-[#2050cb] text-white flex justify-center items-center`}
    >
      <div>
        <p
          className={`text-[32px] text-center w-[341px] md:w-[100%] leading-[40px] md:font-semibold `}
        >
          What's this Simple Secret System all about?
        </p>

        <p
          className={`text-[17px] md:text-[18px] text-center w-[341px] md:w-[100%] mt-[30px] leading-[20px]`}
        >
          You don't need to have Your Own Product
          <br className={`md:hidden`} /> You don't need to have Previous
          Experiences to make this work. And you don't even need a Laptop
        </p>

        <p
          className={`text-[14px] text-center w-[341px] md:w-[100%] mt-[30px]`}
        >
          All you need is your{" "}
          <span className={`font-semibold`}>SMARTPHONE</span>
        </p>
        <p
          className={`text-[17px] text-center w-[341px] md:w-[100%] mt-[30px]`}
        >
          And you can get Started with this Simple System Today!
        </p>

        <div className={`flex justify-center items-center mt-[30px]`}>
          <div
            className={`w-[169px] h-[46px] bg-black flex justify-center items-center cursor-pointer`}
          >
            <a href="https://wa.link/onzfvz">
              <p>SHOW ME HOW</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
