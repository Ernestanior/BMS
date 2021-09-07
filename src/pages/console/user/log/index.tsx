import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "components/sideBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Admin from "./admin";
import Customer from "./customer";

const Index: FC = (): ReactElement => {
  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="操作记录"
        linkList={[
          { text: "管理员操作记录", path: "/user/log/admin-log" },
          { text: "客户操作记录", path: "/user/log/customer-log" },
        ]}
      ></SideBar>
      <Switch>
        <Route path="/user/log/admin-log" component={Admin}></Route>
        <Route path="/user/log/customer-log" component={Customer}></Route>
        <Redirect to="/user/log/admin-log"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
