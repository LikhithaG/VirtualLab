import Dashboard from './pages/Dashboard';
import Estimation from "./elements/Estimation";
import Delphi from "./elements/Delphi";
import ErrorPage from './pages/404';

const pageList = [
  {
    name: "Dashboard",
    path: "/home",
    component: Dashboard,
  },
  {
    name: "Estimation",
    path: "/elements/estimation",
    component: Estimation,
  },
  {
    name: "Delphi",
    path: "/elements/delphi",
    component: Delphi,
  },
  {
    name: "404",
    path: "/pages/404",
    component: ErrorPage,
  },
];

export default pageList;
