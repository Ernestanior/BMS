import React, { FC, ReactElement } from "react";
import "./index.less";
import { Route, Switch } from "react-router-dom";
import SiteList from "./siteList";
import SitePage from "./sitePage";
const Index: FC = (): ReactElement => {
  return (
    <div className="site-container">
      <Switch>
        <Route path="/console/cdn-site/:sitename" component={SitePage}></Route>
        <Route path="/console/cdn-site" component={SiteList}></Route>
      </Switch>

      {/* <Redirect to="/console/site/list"></Redirect> */}
    </div>
  );
};

export default Index;
