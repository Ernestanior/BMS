import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "components/sideBar";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

const Index: FC = (): ReactElement => {
  return (
    <div className="sys-manage-userlist-container">
      <SideBar title="IP黑名单"></SideBar>
      <div>IP黑名单</div>
    </div>
  );
};

export default Index;
