import React, { FC, ReactElement } from "react";
import SideBar from "@/components/sideBar";
import { Outlet, useLocation } from "react-router-dom";

const Index: FC = (): ReactElement => {
  const sitename = useLocation().pathname.split("/")[2];

  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="平台统计"
        linkList={[
          {
            text: "可用率",
            path: `/cdn-site/${sitename}/statistics/platforms/availability`,
          },
          {
            text: "响应时间",
            path: `/cdn-site/${sitename}/statistics/platforms/response-time`,
          },
        ]}
      ></SideBar>
      <Outlet />
    </div>
  );
};

export default Index;
