import React, { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import "./index.less";

interface IProps {
  title: string;
  linkList?: { text: string; path: string }[];
}

const Index: FC<IProps> = ({ title, linkList }: IProps): ReactElement => {
  return (
    <div className="side-bar-container">
      <h1>{title}</h1>
      <ul>
        {linkList?.map((item) => (
          <li>
            <NavLink to={item.path}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
