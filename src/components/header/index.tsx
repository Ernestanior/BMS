import { WindowsFilled, AppstoreFilled } from "@ant-design/icons";
import React, { FC, ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./index.less";
import TopNav from "./topNav";
import SiteNav from "./siteNav";

const Index: FC = (): ReactElement => {
  // const NavPath: { [prop: string]: string } = {
  //   "": "",
  //   home: "首页",
  //   "cdn-site": "CDN站点",
  //   "/": "/",
  //   "site-configuration": "站点配置",
  //   dns: "DNS管理",
  //   source: "源点设置",
  //   ssl: "SSL设置",
  //   ai: "AI策略",
  //   cache: "缓存",
  // };
  const path = useLocation()
    .pathname.split("/")
    .filter((n) => n !== "");
  // console.log(path);

  let pathElement;
  let navElement;
  // if (path.length <= 2) {
  //   pathElement = <></>;
  // }
  if (path[0] === "cdn-site" && path.length >= 2) {
    pathElement = (
      <>
        <span className="header-path">
          <AppstoreFilled spin />
          {/* {path.map((item: any) => {
            return NavPath[item] + " ";
          })} */}
          <span>
            <NavLink to="/cdn-site">CDN站点</NavLink> / {path[1]}
          </span>
        </span>
      </>
    );
    navElement = (
      <SiteNav
        navList={[
          "Site-Configuration",
          "Cache",
          "Firewall",
          "Analyse",
          "CDN-Manage",
        ]}
      ></SiteNav>
    );
  } else if (path[0] === "user") {
    pathElement = (
      <>
        <span className="header-path">
          <AppstoreFilled spin />
          <span>
            <NavLink to="/user">个人中心 /</NavLink>
          </span>
        </span>
      </>
    );
    navElement = (
      <SiteNav navList={["info", "reset-pwd", "security", "log"]}></SiteNav>
    );
  } else {
    pathElement = <></>;
    navElement = (
      <SiteNav
        navList={[
          "Home",
          "CDN-Site",
          "System-Management",
          "Customer-Management",
          "Platform",
          "DNS",
          "Information-Inquiry",
          "SSL-Management",
        ]}
      ></SiteNav>
    );
  }
  return (
    <>
      <div className="header-bg">
        <nav className="header-top-nav">
          <NavLink to="/console">
            <h2 className="header-title">
              <WindowsFilled /> 控制台
            </h2>
          </NavLink>
          <TopNav></TopNav>
        </nav>
        {pathElement}
      </div>
      {navElement}
    </>
  );
};

export default Index;
