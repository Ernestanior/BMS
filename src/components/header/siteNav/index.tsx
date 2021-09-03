import React, { FC, ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./index.less";
interface IProps {
  navList: string[];
}
const Index: FC<IProps> = ({ navList }: IProps): ReactElement => {
  const ppp = useLocation();
  const currentPath: string[] = useLocation()
    .pathname.split("/")
    .filter((n) => n !== "");
  let navPath: string;
  let parentPath: string;
  if (currentPath.length >= 3) {
    navPath = currentPath[3];
    parentPath = currentPath.slice(0, 3).join("/");
  } else {
    navPath = currentPath[1];
    parentPath = currentPath[0];
    // parentPath = currentPath.slice(0, 1).join("/");
  }
  console.log(currentPath);
  console.log(parentPath);
  // console.log(navList);

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
    Firewall: "防火墙",
    Cache: "缓存",
    Analyse: "数据统计",
    "CDN-Manage": "CDN服务商管理",
  };
  // const navList = ["dns", "firewall", "cache", "analyse", "cdnmanage"];
  return (
    <div className="site-nav-container">
      <ul className="header-bot-nav">
        {navList.map((item, index) => (
          <li
            className={
              navPath === item.toLowerCase() ? "header-bot-nav-active" : ""
            }
            key={index}
          >
            <NavLink to={`/${parentPath}/${item.toLowerCase()}`}>
              {listMap[item] || item}
            </NavLink>
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
  );
};

export default Index;
