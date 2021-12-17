import React, { FC, ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./index.less";

interface IProps {
  title: string;
  linkList?: { text: string; path: string }[];
}

const Index: FC<IProps> = ({ title, linkList }: IProps): ReactElement => {
  const path = useLocation().pathname;
  return (
    // 侧边栏
    <div className="side-bar-container">
      {/* 侧边栏标题 */}
      <h1>{title}</h1>
      <ul>
        {/* 侧边导航列表(如果存在的话) */}
        {linkList?.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              className={`side-bar-link-list ${
                path === item.path ? "side-list-active" : ""
              }`}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
