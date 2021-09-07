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
          {
            mainPath: "Site-Configuration",
            subPath: [
              {
                title: "用户列表",
                path: "/cdn-site/:sitename/site-configuration/domain",
              },
            ],
          },
          {
            mainPath: "Cache",
            subPath: [
              {
                title: "内存设置",
                path: "/cache",
              },
              {
                title: "内存清理",
                path: "/cache",
              },
            ],
          },
          {
            mainPath: "Firewall",
            subPath: [
              {
                title: "IP白名单",
                path: "/firwall",
              },
              {
                title: "IP黑名单",
                path: "/firwall",
              },
              {
                title: "UA白名单",
                path: "/firwall",
              },
              {
                title: "UA黑名单",
                path: "/firwall",
              },
            ],
          },
          {
            mainPath: "Analyse",
            subPath: [
              {
                title: "网页性能分析",
                path: "/analyse",
              },
              {
                title: "CDN利用率分析",
                path: "/analyse",
              },
              {
                title: "平台分析",
                path: "/analyse",
              },
              {
                title: "使用率分析",
                path: "/analyse",
              },
            ],
          },
          { mainPath: "CDN-Manage" },
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
      <SiteNav
        navList={[
          { mainPath: "info" },
          { mainPath: "reset-pwd" },
          { mainPath: "security" },
          { mainPath: "log" },
        ]}
      ></SiteNav>
    );
  } else {
    pathElement = <></>;
    navElement = (
      <SiteNav
        navList={[
          { mainPath: "Home" },
          { mainPath: "CDN-Site" },
          {
            mainPath: "System-Management",
            subPath: [
              { title: "用户列表", path: "/system-management/userlist" },
            ],
          },
          { mainPath: "Customer-Management" },
          { mainPath: "Platform" },
          {
            mainPath: "DNS",
            subPath: [
              { title: "域名管理", path: "/dns/domain-management" },
              { title: "记录管理", path: "/dns/record-management" },
            ],
          },
          { mainPath: "Information-Inquiry" },
          { mainPath: "SSL-Management" },
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
