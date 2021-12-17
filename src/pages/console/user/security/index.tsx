import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "@/components/sideBar";
import { Outlet } from "react-router-dom";
const Index: FC = (): ReactElement => {
  return (
    <div className="user-security-container">
      <SideBar
        title="安全设置"
        linkList={[
          { text: "登录限制", path: "/user/security/login-restriction" },
          { text: "登录历史", path: "/user/security/login-records" },
        ]}
      ></SideBar>
      <Outlet />
    </div>
  );
};

export default Index;
