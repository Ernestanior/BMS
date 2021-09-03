import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "components/sideBar";
import Domain from "./domain";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
const Index: FC = (): ReactElement => {
  const path = useLocation().pathname.split("/")[3];
  return (
    <div className="site-dns-container">
      <SideBar
        title="DNS管理"
        linkList={[
          {
            text: "域名与记录管理",
            path: `/console/site/${path}/dns/domain`,
          },
        ]}
      ></SideBar>
      <Switch>
        <Route
          path="/console/cdn-site/:sitename/site-configuration/domain"
          component={Domain}
        />
        <Redirect to="/console/cdn-site/:sitename/site-configuration/domain" />
      </Switch>
    </div>
  );
};

export default Index;
