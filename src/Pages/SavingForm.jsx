import React from 'react';
import emailjs from '@emailjs/browser';

function SavingForm({ showModal, onClose }) {
  const [range, setRange] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const ref = React.useRef(null);
  const form = React.useRef(null);

  const getRange = (ev) => {
    setRange(ev.target.value);
  };

  React.useEffect(() => {
    const rangeLinePadding = 16;
    const calcStep =
      (ref?.current?.offsetWidth - rangeLinePadding) / ref?.current?.max;
    setStep(calcStep);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const SERVICE_ID = 'service_0wimdyw';
    const TEMPLATE_ID = 'template_bcwygpl';
    const USER_ID = 'W0yrLZXUOnFzvGCJx';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
    event.target.reset();
  };

  if (!showModal) return null;

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div className="bg-white w-[413px] rounded-[10px] ">
          <>
            <div className="flex justify-between items-center pl-[2rem] pr-[2rem] pt-[20px] ">
              <h1 className="font-[700] text-[18px] leading-[20px] text-[#33343D] ">
                Create a Savings Plan
              </h1>
              <div>
                <p className=" cursor-pointer text-[red] " onClick={onClose}>
                  X
                </p>
              </div>
            </div>
            <p className=" pl-[2rem] pr-[2rem] pt-[10px]">
              Start a savings plan to smash your goals
            </p>
          </>
          <form
            className="flex justify-center mx-auto items-center gap-[36px] w-[300px] flex-col mt-[3rem]  "
            onSubmit={handleSubmit}
            ref={form}
          >
            <div className="">
              <label className={`block text-xs mb-1}`} htmlFor="name">
                {'Name of Personal Savings'}
              </label>
              <input
                type="text"
                className="form-input rounded-md border bg-[#FEF7FA] placeholder:text-gray-400  text-xs w-[300px] px-[19px] py-[12px] xs:w-[250px] text-gray-500 focus:border-[#0d1027]"
                placeholder="Enter Name"
                name="user_savings"
              />
            </div>

            <div className="">
              <label className={`block text-xs mb-1`} htmlFor="amount">
                {'Target Amount'}
              </label>
              <div className="w-[300px] gap-[10px] items-center px-[19px] rounded-md border bg-[#FEF7FA] flex ">
                <h1>NGN</h1>
                <input
                  type="number"
                  className="form-input w-full px-[19px] py-[12px] bg-[#FEF7FA] placeholder:text-gray-400 text-xs xs:w-[250px] text-gray-500 focus:border-[#0d1027]"
                  placeholder=""
                  name="user_amount"
                />
              </div>
              <div>
                <input
                  className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#5B2E4F] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-[#5B2E4F] checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-[#5B2E4F] checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-[#5B2E4F] dark:checked:after:bg-[#5B2E4F] dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchChecked"
                  defaultChecked
                />
                <label
                  className="inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor="flexSwitchChecked"
                ></label>
              </div>
            </div>

            <div>
              <label className={`block text-xs mb-1`}>
                {'Savings Frequency'}
              </label>
              <select
                type="select"
                className="form-input border rounded-md placeholder:text-gray-400 text-xs w-[300px] px-[19px] py-[12px] xs:w-[250px] mb-3 text-gray-500 bg-[#FEF7FA] focus:border-[#0d1027]"
                placeholder=" Eg: Small, Medium, Large"
                name="user_frequency"
              >
                <option value="" disabled>
                  {' '}
                  Select Option
                </option>
                <option value="Small">Front End</option>
                <option value="Medium">Back End</option>
                <option value="Large">Data Analytics</option>
              </select>
            </div>

            <div>
              <label className={`block text-xs mb-1`}>
                {'How long do you want to save for?'}
              </label>
              <div className="flex flex-col items-center text-center gap-[50px] ">
                <div className="w-[300px] flex  flex-col relative gap-[10px] ">
                  <input
                    type="range"
                    id="range"
                    min="0"
                    max="12"
                    value={range}
                    name="user_range"
                    onChange={getRange}
                    ref={ref}
                    className="h-[40px] text-center text-[14px] "
                    steps="1"
                  />
                  <label
                    htmlFor="range"
                    style={{
                      transform: `translateX(${range * step}px)`,
                      position: `absolute`,
                      bottom: `30px`,
                      left: `0px`,
                    }}
                  >
                    <span className=""> {range} months </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="border-t w-[413px] flex items-end justify-end pr-[3rem] ">
              <input
                type="submit"
                className="transition-colors transition duration-700 ease-in-out my-[1rem] bg-[#5B2E4F] text-white hover:bg-[#5B2E4F] px-[28px] py-[13px] px-7 rounded-[10px] text-xs  cursor-pointer"
                value="PROCEED"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SavingForm;
