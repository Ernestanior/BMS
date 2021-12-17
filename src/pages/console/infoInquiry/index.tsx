import React, { FC, ReactElement } from "react";
import SideBar from "@/components/sideBar";
import { Outlet } from "react-router-dom";

const Index: FC = (): ReactElement => {
  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="信息查询"
        linkList={[
          { text: "CDN站点域名查询", path: "/information-inquiry/cdn-query" },
        ]}
      ></SideBar>
      <Outlet />
    </div>
  );
};

export default Index;
