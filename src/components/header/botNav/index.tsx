import React, { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import "./index.less";
interface IProps {
  path: string;
}

const Index: FC<IProps> = ({ path }: IProps): ReactElement => {
  // const [active, setActive] = React.useState<String>("站点首页");
  // const handleBotNav = (e: any) => {
  //   setActive(e.target.text);
  // };
  return (
    <ul className="header-bot-nav">
      <li className={path === undefined ? "header-bot-nav-active" : ""}>
        <NavLink to="/home/">首页</NavLink>
      </li>
      <li className={path === "site" ? "header-bot-nav-active" : ""}>
        <NavLink to="/home/site">站点首页</NavLink>
      </li>
      <li className={path === "dns" ? "header-bot-nav-active" : ""}>
        <NavLink to="/home/dns">DNS管理</NavLink>
      </li>
      <li className={path === "cache" ? "header-bot-nav-active" : ""}>
        <NavLink to="/home/cache">缓存</NavLink>
      </li>
      <li className={path === "ssl" ? "header-bot-nav-active" : ""}>
        <NavLink to="/home/ssl">SSL设置</NavLink>
      </li>
      <li className={path === "ai" ? "header-bot-nav-active" : ""}>
        <NavLink to="/home/ai">AI策略</NavLink>
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
