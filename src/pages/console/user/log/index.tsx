import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "@/components/sideBar";
import { Outlet } from "react-router-dom";

const Index: FC = (): ReactElement => {
  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="操作记录"
        linkList={[
          { text: "管理员操作记录", path: "/user/log/admin-log" },
          { text: "客户操作记录", path: "/user/log/customer-log" },
        ]}
      ></SideBar>
      <Outlet />
    </div>
  );
};

export default Index;
