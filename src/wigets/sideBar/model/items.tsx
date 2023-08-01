import { Icon, PlayBtn } from "react-bootstrap-icons";
import { routePath } from "shared/config/routeConfig/routeConfig";

export interface ISideBarItem {
  url: string;
  text: string;
  Icon: Icon;
}

export const sideBarMenu: ISideBarItem[] = [
  {
    text: "Login",
    url: routePath.login,
    Icon: PlayBtn,
  },
  {
    text: "Profile",
    url: routePath.profile,
    Icon: PlayBtn,
  },
];
