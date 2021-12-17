import React, { FC, ReactElement } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../index.less";

const Index: FC = (): ReactElement => {
  console.log(useLocation());

  const navPath = useLocation()
    .pathname.split("/")
    .filter((item) => item !== "")[1];
  console.log(navPath);

  return (
    // 个人简介导航
    <div className="site-nav-bg">
      <div className="site-nav-container">
        <ul className="header-bot-nav">
          <li className={navPath === "info" ? "header-bot-nav-active" : ""}>
            <NavLink to={"/user/info"}>个人简介</NavLink>
          </li>
          <li
            className={navPath === "reset-pwd" ? "header-bot-nav-active" : ""}
          >
            <NavLink to={"/user/reset-pwd"}>修改密码</NavLink>
          </li>
          <li className={navPath === "security" ? "header-bot-nav-active" : ""}>
            <NavLink to={"/user/security"}>安全设置</NavLink>
          </li>
          <li className={navPath === "log" ? "header-bot-nav-active" : ""}>
            <NavLink to={"/user/log"}>操作记录</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
