import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "components/sideBar";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Source from "./source";
import Ssl from "./ssl";
import Basic from "./basic";

const Index: FC = (): ReactElement => {
  const sitename = useLocation().pathname.split("/")[2];

  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="客户管理"
        linkList={[
          {
            text: "源设置",
            path: `/cdn-site/${sitename}/site-configuration/platform-setting/source`,
          },
          {
            text: "基础设置",
            path: `/cdn-site/${sitename}/site-configuration/platform-setting/basic`,
          },
          {
            text: "SSL设置",
            path: `/cdn-site/${sitename}/site-configuration/platform-setting/ssl`,
          },
        ]}
      ></SideBar>
      <Switch>
        <Route
          path="/cdn-site/:sitename/site-configuration/platform-setting/source"
          component={Source}
        ></Route>
        <Route
          path="/cdn-site/:sitename/site-configuration/platform-setting/basic"
          component={Basic}
        ></Route>
        <Route
          path="/cdn-site/:sitename/site-configuration/platform-setting/ssl"
          component={Ssl}
        ></Route>

        <Redirect to="/cdn-site/:sitename/site-configuration/platform-setting/source"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
