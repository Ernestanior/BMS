import React, { FC, ReactElement } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dns from "pages/site/sitePage/dns";
import Cache from "pages/site/sitePage/cache";
const Index: FC = (): ReactElement => {
  return (
    <div>
      <Switch>
        <Route path="/console/site/:sitename/cache" component={Cache}></Route>
        <Route path="/console/site/:sitename/dns" component={Dns}></Route>
        <Redirect to="/console/site/:sitename/dns" />
      </Switch>
    </div>
  );
};

export default Index;
