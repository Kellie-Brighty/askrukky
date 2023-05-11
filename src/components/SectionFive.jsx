import React from "react";
import ProofOne from "../assets/proof 1.png";
import ProofTwo from "../assets/proof 2.png";
import ProofThree from "../assets/proof 3.png";

const SectionFive = () => {
  return (
    <div className={`w-[100%] h-[1659px] md:h-[631px] flex justify-center items-center`}>
      <div>
        <p
          className={`text-[30px] font-semibold text-center w-[341px] md:w-[100%]`}
        >
          Here Are Some Results My Students are getting from Affiliate Marketing
        </p>

        <div className={`flex justify-center mt-[50px]`}>
          <div className={`md:flex md:items-center md:space-x-[50px]`}>
            <img src={ProofOne} alt="" className={`w-[186px]`} />
            <img
              src={ProofTwo}
              alt=""
              className={`w-[186px] mt-[60px] md:mt-0`}
            />
            <img
              src={ProofThree}
              alt=""
              className={`w-[186px] mt-[60px] md:mt-0`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
