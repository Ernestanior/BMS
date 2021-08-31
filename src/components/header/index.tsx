import { WindowsFilled, AppstoreFilled } from "@ant-design/icons";
import React, { FC, ReactElement } from "react";
import { useLocation } from "react-router-dom";
import "./index.less";
import TopNav from "./topNav";
interface IProps {}

const Index: FC<IProps> = ({}: IProps): ReactElement => {
  const NavPath: { [prop: string]: string } = {
    home: "控制台",
    site: "站点",
    "/": "/",
  };
  const gg = useLocation()
    .pathname.split("/")
    .filter((item) => !item === false)
    .map((item) => item + " / ")
    .join("")
    .split(" ")
    .slice(0, -2);
  console.log(gg);

  return (
    <div className="header-bg">
      <nav className="header-container">
        <h2 className="header-title">
          <WindowsFilled /> 控制台
        </h2>
        <TopNav></TopNav>
      </nav>
      <span className="header-path">
        <AppstoreFilled spin />
        {gg.map((item: any) => {
          return NavPath[item] + " ";
        })}
      </span>
    </div>
  );
};

export default Index;
