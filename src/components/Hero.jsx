import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className={`hero w-[100%] h-[600px] md:h-[526px]`}>
      <div className={`w-[100%] h-[100%] flex justify-center items-center`}>
        <div>
          <p
            className={`text-[30px] md:text-[48px] text-center w-[277px] md:w-[1133px] text-[#fff] font-semibold leading-[40px] md:leading-[60px]`}
          >
            <span className={`text-[#bbc503]`}>A "Simple Secret System"</span>
            <br /> To Building a Very Profitable Online Business Promoting Other
            People's Products
          </p>
          <p
            className={`w-[277px] md:w-[100%] text-center text-white mt-[30px] text-[14px] md:text-[18px]`}
          >
            Previous experience, Laptop, or your own product not needed
          </p>
          <div className={`flex justify-center`}>
            <div
              className={`w-[158px] h-[46px] bg-black mt-[30px] flex justify-center items-center cursor-pointer`}
            >
              <a href="https://wa.link/onzfvz">
                <p className={`text-white`}>GET STARTED</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
