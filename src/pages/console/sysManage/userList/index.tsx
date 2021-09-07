import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "components/sideBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Admin from "./admin";
import Om from "./om";
import Agent from "./agent";
import Sale from "./sale";
const Index: FC = (): ReactElement => {
  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="用户列表"
        linkList={[
          { text: "管理员", path: "/system-management/userlist/admin" },
          { text: "运维", path: "/system-management/userlist/om" },
          { text: "销售", path: "/system-management/userlist/sale" },
          { text: "中介", path: "/system-management/userlist/agent" },
        ]}
      ></SideBar>
      <Switch>
        <Route
          path="/system-management/userlist/admin"
          component={Admin}
        ></Route>
        <Route path="/system-management/userlist/om" component={Om}></Route>
        <Route
          path="/system-management/userlist/sale"
          component={Agent}
        ></Route>
        <Route
          path="/system-management/userlist/agent"
          component={Sale}
        ></Route>
        <Redirect to="/system-management/userlist/admin"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
