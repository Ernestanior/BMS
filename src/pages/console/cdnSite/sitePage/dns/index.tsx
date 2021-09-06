import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "components/sideBar";
import Domain from "./domain";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
const Index: FC = (): ReactElement => {
  const path = useLocation().pathname.split("/")[2];
  return (
    <div className="site-dns-container">
      <SideBar
        title="DNS管理"
        linkList={[
          {
            text: "域名与记录管理",
            path: `/cdn-site/${path}/site-configuration/domain`,
          },
        ]}
      ></SideBar>
      <Switch>
        <Route
          path="/cdn-site/:sitename/site-configuration/domain"
          component={Domain}
        />
        <Redirect to="/cdn-site/:sitename/site-configuration/domain" />
      </Switch>
    </div>
  );
};

export default Index;
