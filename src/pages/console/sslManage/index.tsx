import React, { FC, ReactElement } from "react";
import SideBar from "@/components/sideBar";
import { Outlet } from "react-router-dom";

const Index: FC = (): ReactElement => {
  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="信息查询"
        linkList={[
          { text: "客户端证书", path: "/ssl-management/client-certificate" },
          { text: "源点证书", path: "/ssl-management/origin-certificate" },
          { text: "证书下载", path: "/ssl-management/certificate-download" },
        ]}
      ></SideBar>
      <Outlet />
    </div>
  );
};

export default Index;
