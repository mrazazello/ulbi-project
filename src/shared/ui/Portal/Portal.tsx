import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";

interface IProps {
  children: ReactNode;
  selector?: string;
}

export const Portal: FC<IProps> = (props) => {
  const { children, selector = "body" } = props;
  const container = document.querySelector(selector);
  return ReactDOM.createPortal(children, container || document.body);
};
