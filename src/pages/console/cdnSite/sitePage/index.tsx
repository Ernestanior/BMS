import React, { FC, ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dns from "./dns";
import Cache from "./cache";
import Firewall from "./firewall";
import Analyse from "./analyse";
import CdnManage from "./cdnManage";
const Index: FC = (): ReactElement => {
  return (
    <div>
      <Switch>
        <Route path="/cdn-site/:sitename/firewall" component={Firewall}></Route>
        <Route path="/cdn-site/:sitename/analyse" component={Analyse}></Route>
        <Route
          path="/cdn-site/:sitename/cdn-manage"
          component={CdnManage}
        ></Route>
        <Route path="/cdn-site/:sitename/cache" component={Cache}></Route>
        <Route
          path="/cdn-site/:sitename/site-configuration"
          component={Dns}
        ></Route>
        <Redirect to="/cdn-site/:sitename/site-configuration" />
      </Switch>
    </div>
  );
};

export default Index;
