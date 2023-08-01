import {
  BarChart,
  Heart,
  Icon,
  PlayBtn,
  ThreeDots,
  Wallet,
} from "react-bootstrap-icons";
import { routePath } from "shared/config/routeConfig/routeConfig";

export interface INavBarItem {
  url: string;
  text: string;
  Icon: Icon;
}

export const navBarItems: INavBarItem[] = [
  {
    url: routePath.main,
    text: "Start",
    Icon: PlayBtn,
  },
  {
    url: routePath.favorites,
    text: "Favorites",
    Icon: Heart,
  },
  {
    url: routePath.progress,
    text: "Progress",
    Icon: BarChart,
  },
  {
    url: routePath.orders,
    text: "Orders",
    Icon: Wallet,
  },
  {
    url: routePath.more,
    text: "More",
    Icon: ThreeDots,
  },
];
