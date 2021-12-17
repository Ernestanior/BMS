import React, { FC, ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../index.less";
import BotNav from "@/components/header/botNav";
const Index: FC = (): ReactElement => {
  const currentPath = useLocation().pathname.split("/");
  const navPath = currentPath[3];
  const parentPath = currentPath.slice(0, 3).join("/");
  // console.log(parentPath);
  // console.log(navPath);

  return (
    // CDN站点导航
    <div className="site-nav-bg">
      <div className="site-nav-container">
        <ul className="header-bot-nav">
          <li
            className={
              navPath === "site-configuration" ? "header-bot-nav-active" : ""
            }
          >
            <NavLink to={`${parentPath}/site-configuration`}>站点配置</NavLink>
            <BotNav
              subPath={[
                { title: "DNS", path: `${parentPath}/site-configuration/dns` },
                {
                  title: "平台设置",
                  path: `${parentPath}/site-configuration/platform-setting`,
                },
                {
                  title: "AI配置",
                  path: `${parentPath}/site-configuration/ai-configuration`,
                },
              ]}
            ></BotNav>
          </li>

          <li className={navPath === "firewall" ? "header-bot-nav-active" : ""}>
            <NavLink to={`${parentPath}/firewall`}>访问控制</NavLink>
            <BotNav
              subPath={[
                {
                  title: "IP白名单",
                  path: `${parentPath}/firewall/ip-whitelist`,
                },
                {
                  title: "IP黑名单",
                  path: `${parentPath}/firewall/ip-blacklist`,
                },
                {
                  title: "UA白名单",
                  path: `${parentPath}/firewall/ua-whitelist`,
                },
                {
                  title: "UA黑名单",
                  path: `${parentPath}/firewall/ua-blacklist`,
                },
              ]}
            ></BotNav>
          </li>
          <li className={navPath === "cache" ? "header-bot-nav-active" : ""}>
            <NavLink to={`${parentPath}/cache`}>缓存</NavLink>
            {/* <BotNav
              subPath={[
                { title: "内存设置", path: `${parentPath}/cache/cache-setup` },
                {
                  title: "内存清理",
                  path: `${parentPath}/cache/cache-cleanup`,
                },
              ]}
            ></BotNav> */}
          </li>
          <li
            className={navPath === "statistics" ? "header-bot-nav-active" : ""}
          >
            <NavLink to={`${parentPath}/statistics`}>数据统计</NavLink>
            <BotNav
              subPath={[
                {
                  title: "网页性能统计",
                  path: `${parentPath}/statistics/web-performance`,
                },
                {
                  title: "CDN利用率统计",
                  path: `${parentPath}/statistics/cdn-utilization`,
                },
                {
                  title: "平台统计",
                  path: `${parentPath}/statistics/platforms`,
                },
                {
                  title: "使用率统计",
                  path: `${parentPath}/statistics/usage`,
                },
              ]}
            ></BotNav>
          </li>
          <li
            className={
              navPath === "platform-management" ? "header-bot-nav-active" : ""
            }
          >
            <NavLink to={`${parentPath}/platform-management`}>平台管理</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
