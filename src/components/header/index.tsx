import { WindowsFilled, AppstoreFilled } from "@ant-design/icons";
import React, { FC, ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./index.less";
import TopNav from "./topNav";
import SiteNav from "./siteNav";

const Index: FC = (): ReactElement => {
  // const NavPath: { [prop: string]: string } = {
  //   console: "控制台",
  //   site: "站点",
  //   "/": "/",
  //   dns: "DNS管理",
  //   source: "源点设置",
  //   ssl: "SSL设置",
  //   ai: "AI策略",
  //   cache: "缓存",
  // };
  const path = useLocation().pathname.split("/");
  let Bot;
  if (path.length <= 2) {
    Bot = <></>;
  } else if (path[2] === "site" && path.length >= 4) {
    Bot = (
      <>
        <span className="header-path">
          <AppstoreFilled spin />
          {/* {path.map((item: any) => {
            return NavPath[item] + " ";
          })} */}
          <span>
            <NavLink to="/console">控制台</NavLink> /{" "}
            <NavLink to="/console/site">站点</NavLink> / {path[3]}
          </span>
        </span>

        <SiteNav></SiteNav>
      </>
    );
  } else if (path[2] === "profile") {
    Bot = (
      <>
        <span className="header-path">
          <AppstoreFilled spin />
          <span>
            <NavLink to="/console">控制台</NavLink> / 个人中心
          </span>
        </span>
        {/* <SiteNav></SiteNav> */}
      </>
    );
  } else {
    Bot = (
      <>
        <span className="header-path">
          <AppstoreFilled spin />
          <span>
            <NavLink to="/console">控制台</NavLink> /{" "}
            <NavLink to="/console/site">站点</NavLink>
          </span>
        </span>
      </>
    );
  }
  return (
    <div className="header-bg">
      <nav className="header-top-nav">
        <NavLink to="/console">
          <h2 className="header-title">
            <WindowsFilled /> 控制台
          </h2>
        </NavLink>
        <TopNav></TopNav>
      </nav>
      {Bot}
    </div>
  );
};

export default Index;
