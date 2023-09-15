// import * as BsIcons from 'react-icons/bs';
import DashboardImg from '../../Assets/images/Iconly (9).svg';
import PlansImg from '../../Assets/images/Document.svg';
import PurseImg from '../../Assets/images/Iconly (1).svg';
import InvImg from '../../Assets/images/Iconly (10).svg';
import BankImg from '../../Assets/images/Iconly (2).svg';
import AccountImg from '../../Assets/images/Iconly (11).svg';
import PortfolioImg from '../../Assets/images/Iconly (5).svg';
import refImg from '../../Assets/images/Iconly (3).svg';
import AboutImg from '../../Assets/images/Iconly (6).svg';
import SupImg from '../../Assets/images/Iconly (7).svg';
import LogoutImg from '../../Assets/images/Iconly (8).svg';

export const SideNavData = [
  {
    title: "Dashboard",
    path: "/",
    icon: `${DashboardImg}`,
  },
  {
    title: "Plans",
    path: "/plans",
    icon: `${PlansImg}`,
  },
  {
    title: "Purse",
    path: "/purse",
    icon: `${PurseImg}`,
  },
  {
    title: "Investments",
    path: "/investment",
    icon: `${InvImg}`,
  },
  {
    title: "Banks & Cards",
    path: "/bank",
    icon: `${BankImg}`,
  },
  {
    title: "Referral Code",
    path: "/refferal",
    icon: `${refImg}`,
  },
  {
    title: "Account",
    path: "/accounts",
    icon: `${AccountImg}`,
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: `${PortfolioImg}`,
  },
  {
    title: "About HerVest",
    path: "/about",
    icon: `${AboutImg}`,
  },
  {
    title: "Support",
    path: "/support",
    icon: `${SupImg}`,
  },
  {
    title: "Logout",
    // path: "/support",
    icon: `${LogoutImg}`,
  },
];
