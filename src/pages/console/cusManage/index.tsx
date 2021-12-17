import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "components/sideBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Registered from "./registered";
import Sales from "./sales";

const Index: FC = (): ReactElement => {
  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="客户管理"
        linkList={[
          { text: "已注册客户", path: "/customer-management/registered" },
          { text: "销售客户", path: "/customer-management/sales" },
        ]}
      ></SideBar>
      <Switch>
        <Route
          path="/customer-management/registered"
          component={Registered}
        ></Route>
        <Route path="/customer-management/sales" component={Sales}></Route>

        <Redirect to="/customer-management/registered"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
