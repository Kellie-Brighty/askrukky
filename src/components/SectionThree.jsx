import React from "react";
import Join from "../assets/Join.png";
import Pick from "../assets/Pick.png";
import Traffic from "../assets/Traffic.png";

const SectionThree = () => {
  return (
    <div
      className={`w-[100%] h-[1124px] md:h-[513px] bg-[#7A8012] text-white flex justify-center items-center`}
    >
      <div className={`md:flex md:items-center md:justify-evenly w-[100%]`}>
        <div className={`flex justify-center`}>
          <div>
            <p className={`text-[32px] font-semibold w-[341px] md:w-[440px]`}>
              What's this Simple Secret System all about?
            </p>
            <p className={`text-[17px] mt-[20px] w-[341px] md:w-[440px]`}>
              This simple secret system is a business model called Affiliate
              Marketing and it's an EVER-GREEN system. It is simply recommending
              a product or service in return for a commission from the product
              seller or service provider.
            </p>
            <p className={`text-[17px] mt-[20px]`}>
              Now, here's exactly how it works:
            </p>
          </div>
        </div>

        <div className={`mt-[120px] md:mt-0 space-y-[40px] md:space-y-[20px]`}>
          <div className={`flex justify-center space-x-[30px]`}>
            <img src={Join} alt="" className={`w-[80px] h-[80px]`} />
            <p className={`w-[237px] md:w-[336px] text-[16px]`}>
              Join a platform with a list of high quality digital products that
              have been created and listed by Experts.
            </p>
          </div>

          <div className={`flex justify-center space-x-[30px]`}>
            <img src={Pick} alt="" className={`w-[80px] h-[80px]`} />
            <p className={`w-[237px] md:w-[336px] text-[16px]`}>
              You simply pick a product of your choice that you can promote and
              get a good commission from. There are products that cost as high
              as N60k. Imagine selling a product for N60,000 and pocketing
              N30,000 as commission.
            </p>
          </div>

          <div className={`flex justify-center space-x-[30px]`}>
            <img src={Traffic} alt="" className={`w-[80px] h-[80px]`} />
            <p className={`w-[237px] md:w-[336px] text-[16px]`}>
              Drive Traffic to the product, get more people to know about it and
              then from every sale, you get your commission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
