import React from 'react';
import BellImg from '../../Assets/images/Notification.svg';

function Header() {
  return (
  <div className="flex items-center justify-between pl-[4rem] pr-[4rem] py-[20px] border-b ">
    <div>
      <h1 className="font-[500] text-[15px] leading-[21px] text-[#33343D] ">Plans</h1>
    </div>
    <div>
      <img src={BellImg} alt="" />
    </div>
  </div>
  );
}

export default Header;
