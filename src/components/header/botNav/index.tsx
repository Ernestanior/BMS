import React, { FC, ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./index.less";
interface IProps {
  subPath: {
    title: string;
    path: string;
  }[];
}
const Index: FC<IProps> = ({ subPath }: IProps): ReactElement => {
  const currentPath = useLocation().pathname;

  return (
    // 底部子导航
    <div className="bot-nav-bg">
      <ul className="bot-nav-container">
        {subPath.map((item: any) => (
          <li
            className={`bot-nav-item ${
              currentPath.includes(item.path) ? "bot-nav-active" : ""
            }`}
            key={item.path}
          >
            <NavLink to={item.path}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
