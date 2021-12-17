import React, { FC, ReactElement } from "react";
import SideBar from "@/components/sideBar";
import { Outlet } from "react-router-dom";

const Index: FC = (): ReactElement => {
  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="客户管理"
        linkList={[
          { text: "全部", path: "/platform/all" },
          { text: "中国加速(ICP)", path: "/platform/china-icp" },
          { text: "中国加速", path: "/platform/china" },
          { text: "全球加速", path: "/platform/global" },
          { text: "全球DDOS", path: "/platform/global-ddos" },
          { text: "自定义平台", path: "/platform/custom-platform" },
        ]}
      ></SideBar>
      <Outlet />
    </div>
  );
};

export default Index;
