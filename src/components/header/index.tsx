import { WindowsFilled, AppstoreFilled } from "@ant-design/icons";
import React, { FC, ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./index.less";
import TopNav from "./topNav";
import NavOne from "./siteNav/navOne";
import NavTwo from "./siteNav/navTwo";
import NavThree from "./siteNav/navThree";
const Index: FC = (): ReactElement => {
  // 获取当前路由路径
  const path = useLocation()
    .pathname.split("/")
    .filter((n) => n !== "");

  let pathElement;
  let navElement;

  //cdn站点导航
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
  }
  //用户个人导航
  else if (path[0] === "user") {
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
  }
  //首页导航
  else {
    pathElement = <></>;
    navElement = <NavOne></NavOne>;
  }
  return (
    <>
      <div className="header-bg">
        <nav className="header-top-nav">
          {/* 顶部左侧logo */}
          <NavLink to="/home">
            <h2 className="header-title">
              <WindowsFilled /> 控制台
            </h2>
          </NavLink>
          {/* 顶部右边导航 */}
          <TopNav></TopNav>
        </nav>
        {/* 中部路径展示 */}
        {pathElement}
      </div>
      {/* 底部页面导航以及子导航 */}
      {navElement}
    </>
  );
};

export default Index;
