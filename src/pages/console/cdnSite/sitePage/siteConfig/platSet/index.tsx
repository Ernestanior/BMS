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
            text: "源设置",
            path: `/cdn-site/${sitename}/site-configuration/platform-setting/source`,
          },
          {
            text: "基础设置",
            path: `/cdn-site/${sitename}/site-configuration/platform-setting/basic`,
          },
          {
            text: "SSL设置",
            path: `/cdn-site/${sitename}/site-configuration/platform-setting/ssl`,
          },
        ]}
      ></SideBar>
      <Outlet />
    </div>
  );
};

export default Index;
