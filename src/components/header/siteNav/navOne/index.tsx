import React, { FC, ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../index.less";
import BotNav from "@/components/header/botNav";

const Index: FC = (): ReactElement => {
  console.log(useLocation());

  const navPath = useLocation()
    .pathname.split("/")
    .filter((item) => item !== "")[0];
  console.log(navPath);

  return (
    // 首页导航
    <div className="site-nav-bg">
      <div className="site-nav-container">
        <ul className="header-bot-nav">
          <li className={navPath === "home" ? "header-bot-nav-active" : ""}>
            <NavLink to={"/home"}>首页</NavLink>
          </li>
          <li className={navPath === "cdn-site" ? "header-bot-nav-active" : ""}>
            <NavLink to={"/cdn-site"}>CDN站点</NavLink>
          </li>
          <li
            className={
              navPath === "system-management" ? "header-bot-nav-active" : ""
            }
          >
            <NavLink to={"/system-management"}>系统管理</NavLink>
            <BotNav
              subPath={[
                { title: "用户列表", path: "/system-management/userlist" },
              ]}
            ></BotNav>
          </li>
          <li
            className={
              navPath === "customer-management" ? "header-bot-nav-active" : ""
            }
          >
            <NavLink to={"/customer-management"}>客户管理</NavLink>
          </li>
          <li className={navPath === "platform" ? "header-bot-nav-active" : ""}>
            <NavLink to={"/platform"}>平台</NavLink>
          </li>
          <li className={navPath === "dns" ? "header-bot-nav-active" : ""}>
            <NavLink to={"/dns"}>DNS</NavLink>
            <BotNav
              subPath={[
                { title: "域名管理", path: "/dns/domain-management" },
                { title: "记录管理", path: "/dns/record-management" },
              ]}
            ></BotNav>
          </li>
          <li
            className={
              navPath === "information-inquiry" ? "header-bot-nav-active" : ""
            }
          >
            <NavLink to={"/information-inquiry"}>信息查询</NavLink>
          </li>
          <li
            className={
              navPath === "ssl-management" ? "header-bot-nav-active" : ""
            }
          >
            <NavLink to={"/ssl-management"}>SSL管理</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
