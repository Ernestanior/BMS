import React, { FC, ReactElement } from "react";
import SideBar from "@/components/sideBar";
import { Outlet } from "react-router-dom";

const Index: FC = (): ReactElement => {
  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="客户管理"
        linkList={[
          { text: "已注册客户", path: "/customer-management/registered" },
          { text: "销售客户", path: "/customer-management/sales" },
        ]}
      ></SideBar>
      <Outlet />
    </div>
  );
};

export default Index;
