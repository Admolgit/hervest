import React from 'react';
import PlansCards from './PlansCards';
import InvestmentPlan from '../../Pages/Investment';

function MobileNav() {
  const [step, setStep] = React.useState(0);

  function handleNextClick() {
    setStep(step + 1);
  }

  function handlePrevClick() {
    setStep(step - 1);
  }

  const Dashes = [
    {
      id: 1,
      active:
        step === 0
          ? 'bg-[#5B2E4F] w-[80px] h-[10px] rounded-[8px] '
          : 'bg-[#DFDFDF] w-[40px] h-[10px] rounded-[8px]',
    },
    {
      id: 2,
      active:
        step === 1
          ? 'bg-[#5B2E4F] w-[80px] h-[10px] rounded-[8px] '
          : 'bg-[#DFDFDF] w-[40px] h-[10px] rounded-[8px]',
    },
  ];

  return (
    <div>
      {step === 0 && (
        <div>
          <div>
            <div className="">
              <h2 className="font-[500] text-[10px] leading-[13.5px] sm:text-[8.57px] ">
                Saving
              </h2>
            </div>
            <div
              className="flex items-center gap-[5px]  "
              onClick={handlePrevClick}
            >
              {Dashes.map((dash) => (
                <div className={dash.active} key={dash.id} />
              ))}
            </div>
          </div>
          <PlansCards />
        </div>
      )}
      {step === 1 && <InvestmentPlan />}
    </div>
  );
}

export default MobileNav;
