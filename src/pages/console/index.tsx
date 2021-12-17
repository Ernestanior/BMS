import React, { FC, ReactElement } from "react";
import "./index.less";
// import TableOne from "./home/tableOne";
// import TableTwo from "./home/tableTwo";
// import TableThree from "./home/tableThree";
// import TableFour from "./home/tableFour";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./home";
import Site from "./cdnSite";
import User from "./user";
import SysManage from "./sysManage";
import SslManage from "./sslManage";
import CusManage from "./cusManage";
import Dns from "./dns";
import Platform from "./platform";
import InfoInquiry from "./infoInquiry";
const Index: FC = (): ReactElement => {
  return (
    <div>
      <Switch>
        <Route path="/user" component={User}></Route>
        <Route path="/cdn-site" component={Site}></Route>
        <Route path="/system-management" component={SysManage}></Route>
        <Route path="/customer-management" component={CusManage}></Route>
        <Route path="/ssl-management" component={SslManage}></Route>
        <Route path="/platform" component={Platform}></Route>
        <Route path="/information-inquiry" component={InfoInquiry}></Route>
        <Route path="/dns" component={Dns}></Route>
        <Route path="/home" component={Home} />
        <Redirect to="/home"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
