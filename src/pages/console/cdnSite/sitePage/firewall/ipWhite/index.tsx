import React, { FC, ReactElement } from "react";
import SideBar from "@/components/sideBar";

const Index: FC = (): ReactElement => {
  return (
    <div className="sys-manage-userlist-container">
      <SideBar title="IP白名单"></SideBar>
      <div>IP白名单</div>
    </div>
  );
};

export default Index;
