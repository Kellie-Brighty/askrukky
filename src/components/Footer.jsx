import React from "react";

const Footer = () => {
  return (
    <div
      className={`w-[100%] h-[251px] bg-black text-white flex justify-center items-center`}
    >
      <div>
        <p className={`text-[16px] underline font-bold text-center`}>
          Disclaimer
        </p>
        <p className={`w-[201px] md:w-[100%] text-center text-[14px]`}>
          This Site is NOT part of Facebook Website or Facebook, Inc.
          Additionally, this site is NOT endorsed by Facebook in any way.
          Facebook is a trademark of Facebook, Inc.
        </p>
      </div>
    </div>
  );
};

export default Footer;
