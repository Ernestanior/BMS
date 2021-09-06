import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "components/sideBar";
const Index: FC = (): ReactElement => {
  return (
    <div className="user-log-container">
      <SideBar title="操作记录" />
      <div style={{ height: "100px" }}>待开发</div>
    </div>
  );
};

export default Index;
