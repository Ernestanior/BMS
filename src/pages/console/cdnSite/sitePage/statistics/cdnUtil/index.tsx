import React, { FC, ReactElement } from "react";
import SideBar from "@/components/sideBar";

const Index: FC = (): ReactElement => {
  return (
    <div className="sys-manage-userlist-container">
      <SideBar title="CDN利用率统计"></SideBar>
      <div>cdn利用率统计</div>
    </div>
  );
};

export default Index;
