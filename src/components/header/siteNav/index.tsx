import React, { FC, ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./index.less";

const Index: FC = (): ReactElement => {
  const currentPath: string = useLocation().pathname;
  const navPath = currentPath.split("/")[4];
  const parentPath = currentPath.split("/").slice(0, 4).join("/");
  // console.log(parentPath);

  // const [active, setActive] = React.useState<String>("站点首页");
  // const handleBotNav = (e: any) => {
  //   setActive(e.target.text);
  // };
  return (
    <ul className="header-bot-nav">
      <li className={navPath === "dns" ? "header-bot-nav-active" : ""}>
        <NavLink to={parentPath}>站点配置</NavLink>
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
      </li>
      {/* <li className={active === "源点设置" ? "header-bot-nav-active" : ""}>
        <NavLink to="/home/source">源点设置</NavLink>
      </li>
      <li className={active === "SSL设置" ? "header-bot-nav-active" : ""}>
        <NavLink to="/home/ssl">SSL设置</NavLink>
      </li>
      <li className={active === "AI策略" ? "header-bot-nav-active" : ""}>
        <NavLink to="/home/ai">AI策略</NavLink>
      </li> */}
    </ul>
  );
};

export default Index;
