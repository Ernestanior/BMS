import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "components/sideBar";
import { Redirect, Route, Switch } from "react-router-dom";
import CdnQuery from "./cdnQuery";

const Index: FC = (): ReactElement => {
  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="信息查询"
        linkList={[
          { text: "CDN站点域名查询", path: "/information-inquiry/cdn-query" },
        ]}
      ></SideBar>
      <Switch>
        <Route
          path="/information-inquiry/cdn-query"
          component={CdnQuery}
        ></Route>

        <Redirect to="/information-inquiry/cdn-query"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
