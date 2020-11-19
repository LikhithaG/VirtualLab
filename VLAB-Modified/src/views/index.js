import Dashboard from './pages/Dashboard';
import Estimation from "./elements/Estimation";
import Experiments from "./elements/Experiment";
import Delphi from "./elements/Delphi";
import ErrorPage from './pages/404';
import Excersice from "./elements/Excersice";

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
    name: "Excersice",
    path: "/elements/excersice",
    component: Excersice,
  },
  {
    name: "Experiment",
    path: "/elements/experiment",
    component: Experiments,
  },
  {
    name: "404",
    path: "/pages/404",
    component: ErrorPage,
  },
];

export default pageList;
