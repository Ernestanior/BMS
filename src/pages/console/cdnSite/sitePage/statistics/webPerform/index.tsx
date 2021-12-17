import React, { FC, ReactElement } from "react";
import SideBar from "@/components/sideBar";
import { Outlet, useLocation } from "react-router-dom";

const Index: FC = (): ReactElement => {
  const sitename = useLocation().pathname.split("/")[2];

  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="网页性能统计"
        linkList={[
          {
            text: "可用率",
            path: `/cdn-site/${sitename}/statistics/web-performance/availability`,
          },
          {
            text: "响应时间",
            path: `/cdn-site/${sitename}/statistics/web-performance/response-time`,
          },
          {
            text: "资源访问",
            path: `/cdn-site/${sitename}/statistics/web-performance/visit-source`,
          },
        ]}
      ></SideBar>
      <Outlet />
    </div>
  );
};

export default Index;
