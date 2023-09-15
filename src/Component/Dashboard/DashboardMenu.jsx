import React, { useState } from 'react';
import LOGO from '../../Assets/images/HerVest Logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import { SideNavData } from './SideNavData';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// // import * as AiIcons from "react-icons/ai";
// import * as ImIcons from 'react-icons/im';

const DashboardMenu = () => {
  const [sidebar, setSidebar] = useState(true);
  const [clicked, setClicked] = useState('');

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="">
      <div >
        <IconContext.Provider
          value={{
            style: {
              color: '#89969F',
            },
          }}
        >
          <div className="hidden bg-[#fff] h-[80px] justify-between items-center sm:fixed sm:flex sm:left-0 sm:top-0 sm:w-[100%] sm:z-20  ">
            <Link
              to="#"
              className="ml-[2rem] text-[24px] bg-[none] sm:ml-[0rem]"
            >
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav
            className={
              sidebar
                ? 'fixed bg-[#fff] flex justify-center items-center w-[230px] h-[100vh] ml-[2rem] top-0 z-50 duration-700 sm:left-[-100%] sm:ml-[0rem] sm:overflow-auto'
                : 'fixed bg-[#fff] flex justify-center items-center w-[230px] h-[100vh] ml-[2rem] top-0 z-50 duration-700 sm:ml-[0rem] sm:overflow-auto'
            }
          >
            <ul className="w-[100%]" onClick={showSidebar}>
              <li className="hidden bg-[#fff] w-[100%] h-[80px] justify-start items-center sm:flex sm:mt-[-7rem] ">
                <Link
                  to="#"
                  className="ml-[2rem] text-[2rem] bg-inherit sm:ml-[0rem] "
                >
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              <div className="pb-[3rem] mt-[-4rem] ">
                <img className=" " src={LOGO} alt="" />
              </div>
              {SideNavData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={
                      item.title === clicked
                        ? ' px-[1.5rem] py-[1rem] bg-[#489494] text-[#A8B0E7] duration-300 bg-[#F8F1F6] rounded-[20px] '
                        : ' px-[1.5rem] py-[1rem] text-[B3B3B6] rounded-[20px] '
                    }
                  >
                    <Link
                      className={
                        item.title === clicked
                          ? ' text-[#AFB6BC] flex items-center gap-2 '
                          : ' text-[#AFB6BC] flex items-center gap-2 '
                      }
                      to={item.path}
                      onClick={() => setClicked(item.title)}
                    >
                      <NavLink
                        className="flex items-center gap-4 text-[14px] text-[#1A1619]"
                        to={item.path}
                      >
                        <img src={item.icon} alt="" />
                        <span className="">{item.title}</span>
                      </NavLink>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default DashboardMenu;
