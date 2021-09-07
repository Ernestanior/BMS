import React, { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import "./index.less";
interface IProps {
  subPath: {
    title: string;
    path: string;
  }[];
}
const Index: FC<IProps> = ({ subPath }: IProps): ReactElement => {
  return (
    <div className="bot-nav-bg">
      <ul className="bot-nav-container">
        {subPath.map((item: any) => (
          <li className="bot-nav-item">
            {/* <NavLink to={item.path}>{item.title}</NavLink> */}
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
