import { Icon } from "react-bootstrap-icons";

export interface ISideBarItem {
  url: string;
  text: string;
  Icon: Icon;
  authOnly?: boolean;
}
