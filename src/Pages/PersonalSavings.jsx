import React from 'react';
import SavingImg from '../Assets/images/Financial plan Icon(1).svg';
import ArrowDown from '../Assets/images/Down-arrow (1).svg';
import SavingForm from './SavingForm';

function PersonalSavings() {
  const [showModal, setShowModal] = React.useState(false);
  const handleClick = () => {
    window.history.back();
  };

  return (
    <>
      <div className="pl-[4rem] pl-[4rem] ">
        <div className=" ">
          <div className=" ">
            <div className="px-[7px] py-[9px] flex items-center gap-[10px] bg-[#FEF7FA] w-[86px] justify-center rounded-[9px] mt-[2rem] mb-[3rem] ">
              <img src={ArrowDown} alt="" />
              <button
                className="font-[500] text-[10px] leading-[13.5px] "
                onClick={handleClick}
              >
                Back
              </button>
            </div>
            <h1 className="font-[700] text-[18px] leading-[20px] text-[#33343D] ">
              Personal Savings
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-[15px] mt-[3rem] ">
            <div className="bg-[#FEF7FA] rounded-[50%] ">
              <img src={SavingImg} className="px-[50px] py-[50px] " alt="" />
            </div>
            <h1 className="font-[700] text-[24px] leading-[33px] text-center ">
              No Personal Savings Plan!
            </h1>
            <p className="w-[352px] text-center font-[400] text-[16px] leading-[24px] ">
              Smash your financial goals by starting a personal savings plan
              today!
            </p>
            <button onClick={() => setShowModal(true)} className="bg-[#5B2E4F] text-white text-[12px] px-[152px] py-[13px] font-[500] leading-[16.2px] ">
              START A SAVINGS PLAN
            </button>
          </div>
        </div>
      </div>
      <SavingForm showModal={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default PersonalSavings;
