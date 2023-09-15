import React from 'react';
import { Link } from 'react-router-dom';
import PerImg from '../../Assets/images/Group 7162.svg';
import CliqImg from '../../Assets/images/Group 7159.svg';
import SoftImg from '../../Assets/images/Group 7745.svg';
import KeyImg from '../../Assets/images/Group 7825.svg';
import RightArrow from '../../Assets/images/CaretRight (1).svg';

function Header() {
  return (
    <div className="pl-[4rem] pr-[4rem] ">
      <h1 className="mt-[2rem] mb-[1rem] ">Plans</h1>
      <div className="grid grid-cols-3 gap-[25px] sm:grid-cols-1 ">
        <div className="flex items-start justify-between bg-[#EFEAED] px-[22px] py-[18px] cursor-pointer ">
          <div className="flex items-center gap-[10px]">
            <img src={PerImg} alt="" />
            <div>
              <h3 className="font-[700] text-[] ">Personal</h3>
              <p className="font-[400] text-[13px] leading-[17.55px] ">
                Locked savings towards long term goals.
              </p>
            </div>
          </div>
          <div>
            <Link to="/savings">
              <img src={RightArrow} alt="" />
            </Link>
          </div>
        </div>
        <div className="flex items-start justify-between bg-[#EFEAED] px-[22px] py-[18px] cursor-pointer ">
          <div className="flex items-center gap-[10px]">
            <img src={CliqImg} alt="" />
            <div>
              <h3 className="font-[700] text-[] ">Personal</h3>
              <p className="font-[400] text-[13px] leading-[17.55px] ">
                Locked savings towards long term goals.
              </p>
            </div>
          </div>
          <div>
            <img src={RightArrow} alt="" />
          </div>
        </div>
        <div className="flex items-start justify-between bg-[#EFEAED] px-[22px] py-[18px] cursor-pointer ">
          <div className="flex items-center gap-[10px]">
            <img src={SoftImg} alt="" />
            <div>
              <h3 className="font-[700] text-[] ">Personal</h3>
              <p className="font-[400] text-[13px] leading-[17.55px] ">
                Locked savings towards long term goals.
              </p>
            </div>
          </div>
          <div>
            <img src={RightArrow} alt="" />
          </div>
        </div>
        <div className="flex items-start justify-between bg-[#EFEAED] px-[22px] py-[18px] cursor-pointer ">
          <div className="flex items-center gap-[10px]">
            <img src={KeyImg} alt="" />
            <div>
              <h3 className="font-[700] text-[] ">Personal</h3>
              <p className="font-[400] text-[13px] leading-[17.55px] ">
                Locked savings towards long term goals.
              </p>
            </div>
          </div>
          <div>
            <img src={RightArrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
