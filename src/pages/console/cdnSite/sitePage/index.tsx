import React, { FC, ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SiteConfig from "./siteConfig";
import Cache from "./cache";
import Firewall from "./firewall";
import Statistics from "./statistics";
import PlatMana from "./plat-mana";
const Index: FC = (): ReactElement => {
  return (
    <div>
      <Switch>
        <Route path="/cdn-site/:sitename/firewall" component={Firewall}></Route>
        <Route
          path="/cdn-site/:sitename/statistics"
          component={Statistics}
        ></Route>
        <Route
          path="/cdn-site/:sitename/platform-management"
          component={PlatMana}
        ></Route>
        <Route path="/cdn-site/:sitename/cache" component={Cache}></Route>
        <Route
          path="/cdn-site/:sitename/site-configuration"
          component={SiteConfig}
        ></Route>
        <Redirect to="/cdn-site/:sitename/site-configuration" />
      </Switch>
    </div>
  );
};

export default Index;
