import { Icon, PlayBtn } from "react-bootstrap-icons";
import { routePath } from "shared/config/routeConfig/routeConfig";

export interface ISideBarItem {
  url: string;
  text: string;
  Icon: Icon;
  authOnly?: boolean;
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
    authOnly: true,
  },
  {
    text: "Articles",
    url: routePath.articles,
    Icon: PlayBtn,
    authOnly: true,
  },
  {
    text: "Article page",
    url: routePath.articles_detail + "1",
    Icon: PlayBtn,
    authOnly: true,
  },
];
