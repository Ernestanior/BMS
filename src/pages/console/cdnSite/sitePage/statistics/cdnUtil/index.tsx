import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "components/sideBar";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

const Index: FC = (): ReactElement => {
  return (
    <div className="sys-manage-userlist-container">
      <SideBar title="CDN利用率统计"></SideBar>
      <div>cdn利用率统计</div>
    </div>
  );
};

export default Index;
