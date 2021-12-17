import React, { FC, ReactElement } from "react";
import SideBar from "@/components/sideBar";
import { useLocation, Outlet } from "react-router-dom";

const Index: FC = (): ReactElement => {
  const sitename = useLocation().pathname.split("/")[2];

  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="客户管理"
        linkList={[
          {
            text: "配置设置",
            path: `/cdn-site/${sitename}/site-configuration/ai-configuration/config`,
          },
          {
            text: "调度日志",
            path: `/cdn-site/${sitename}/site-configuration/ai-configuration/log`,
          },
        ]}
      ></SideBar>
      <Outlet />
    </div>
  );
};

export default Index;
