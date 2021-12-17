import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "@/components/sideBar";
import { Outlet } from "react-router-dom";

const Index: FC = (): ReactElement => {
  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="用户列表"
        linkList={[
          { text: "管理员", path: "/system-management/userlist/admin" },
          { text: "运维", path: "/system-management/userlist/om" },
          { text: "销售", path: "/system-management/userlist/sale" },
          { text: "中介", path: "/system-management/userlist/agent" },
        ]}
      ></SideBar>
      <Outlet />
    </div>
  );
};

export default Index;
