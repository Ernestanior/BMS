import { WindowsFilled, AppstoreFilled } from "@ant-design/icons";
import React, { FC, ReactElement } from "react";
import { useLocation } from "react-router-dom";
import "./index.less";
import TopNav from "./topNav";
import BotNav from "./botNav";
interface IProps {}

const Index: FC<IProps> = ({}: IProps): ReactElement => {
  const NavPath: { [prop: string]: string } = {
    home: "控制台",
    site: "站点",
    "/": "/",
    dns: "DNS管理",
    source: "源点设置",
    ssl: "SSL设置",
    ai: "AI策略",
  };
  const path = useLocation()
    .pathname.split("/")
    .filter((item) => !item === false)
    .map((item) => item + " / ")
    .join("")
    .split(" ")
    .slice(0, -2);
  console.log(path);

  return (
    <div className="header-bg">
      <nav className="header-top-nav">
        <h2 className="header-title">
          <WindowsFilled /> 控制台
        </h2>
        <TopNav></TopNav>
      </nav>
      <span className="header-path">
        <AppstoreFilled spin />
        {path.map((item: any) => {
          return NavPath[item] + " ";
        })}
      </span>

      <BotNav path={path[2]}></BotNav>
    </div>
  );
};

export default Index;
