import React from 'react';
import BellImg from '../../Assets/images/Notification.svg';
import MenuImg from '../../Assets/images/Iconly (12).svg';

function Header() {
  return (
  <div className="flex items-center justify-between pl-[4rem] pr-[4rem] py-[20px] border-b sm:pl-[1rem] sm:pr-[1rem] sm:w-full ">
    <div>
      <h1 className="font-[500] text-[15px] leading-[21px] text-[#33343D] sm:hidden ">Plans</h1>
      <img src={MenuImg} className="hidden sm:block" alt="" />
    </div>
    <div className="sm:w-[18.27px] sm:h-[20px] ">
      <img src={BellImg} alt="" />
    </div>
  </div>
  );
}

export default Header;
