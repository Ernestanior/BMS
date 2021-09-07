import { WindowsFilled, AppstoreFilled } from "@ant-design/icons";
import React, { FC, ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./index.less";
import TopNav from "./topNav";
import NavOne from "./siteNav/navOne";
import NavTwo from "./siteNav/navTwo";
import NavThree from "./siteNav/navThree";
const Index: FC = (): ReactElement => {
  const path = useLocation()
    .pathname.split("/")
    .filter((n) => n !== "");

  let pathElement;
  let navElement;

  if (path[0] === "cdn-site" && path.length >= 2) {
    pathElement = (
      <>
        <span className="header-path">
          <AppstoreFilled spin />
          <span>
            <NavLink to="/cdn-site">CDN站点</NavLink> / {path[1]}
          </span>
        </span>
      </>
    );
    navElement = <NavThree></NavThree>;
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
    navElement = <NavTwo></NavTwo>;
  } else {
    pathElement = <></>;
    navElement = <NavOne></NavOne>;
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
