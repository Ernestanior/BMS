import React, { FC, ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./index.less";
import BotNav from "../botNav";

interface SubPath {
  title: string;
  path: string;
}
interface NavList {
  mainPath: string;
  subPath?: SubPath[];
}
interface IProps {
  navList: NavList[];
}
const Index: FC<IProps> = ({ navList }: IProps): ReactElement => {
  console.log(navList);

  const currentPath: string[] = useLocation()
    .pathname.split("/")
    .filter((n) => n !== "");
  let navPath: string;
  let parentPath: string;
  if (currentPath.length >= 2) {
    if (currentPath[0] === "user") {
      parentPath = "user";
      navPath = currentPath[1];
    } else {
      navPath = currentPath[2];
      parentPath = currentPath.slice(0, 2).join("/");
    }
  } else {
    navPath = currentPath[0];
    parentPath = currentPath[0];
  }
  // console.log(currentPath);
  // console.log(parentPath);

  // const [active, setActive] = React.useState<String>("站点首页");
  // const handleBotNav = (e: any) => {
  //   setActive(e.target.text);
  // };
  const listMap: any = {
    Home: "首页",
    "System-Management": "系统管理",
    "Customer-Management": "客户管理",
    Platform: "平台",
    "CDN-Site": "CDN站点",
    "Information-Inquiry": "信息查询",
    "Site-Configuration": "站点配置",
    "SSL-Management": "SSL管理",
    Firewall: "防火墙",
    Cache: "缓存",
    Analyse: "数据统计",
    "CDN-Manage": "CDN服务商管理",
    info: "个人简介",
    "reset-pwd": "修改密码",
    security: "安全设置",
    log: "操作记录",
  };
  return (
    <div className="site-nav-bg ">
      <div className="site-nav-container">
        <ul className="header-bot-nav">
          {navList.map((item, index) => (
            <li
              className={
                navPath === item.mainPath.toLowerCase()
                  ? "header-bot-nav-active"
                  : ""
              }
              key={index}
            >
              {currentPath.length >= 2 ? (
                <NavLink to={`/${parentPath}/${item.mainPath.toLowerCase()}`}>
                  {listMap[item.mainPath] || item.mainPath}
                </NavLink>
              ) : (
                <NavLink to={`/${item.mainPath.toLowerCase()}`}>
                  {listMap[item.mainPath] || item.mainPath}
                </NavLink>
              )}
              {item.subPath ? <BotNav subPath={item.subPath} /> : ""}
            </li>
          ))}
          {/* <li className={navPath === "dns" ? "header-bot-nav-active" : ""}>
          <NavLink to={parentPath + "/dns"}>站点配置</NavLink>
        </li>
        <li className={navPath === "firewall" ? "header-bot-nav-active" : ""}>
          <NavLink to={parentPath + "/firewall"}>防火墙</NavLink>
        </li>
        <li className={navPath === "cache" ? "header-bot-nav-active" : ""}>
          <NavLink to={parentPath + "/cache"}>缓存</NavLink>
        </li>
        <li className={navPath === "analyse" ? "header-bot-nav-active" : ""}>
          <NavLink to={parentPath + "/analyse"}>数据统计</NavLink>
        </li>
        <li className={navPath === "cdnmanage" ? "header-bot-nav-active" : ""}>
          <NavLink to={parentPath + "/cdnmanage"}>CDN服务商管理</NavLink>
        </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Index;
