import React, { FC, ReactElement } from "react";
import "./index.less";
import SideBar from "components/sideBar";
import { Redirect, Route, Switch } from "react-router-dom";
import All from "./all";
import China from "./china";
import ChinaICP from "./chinaICP";
import CusPlat from "./CusPlat";
import Global from "./global";
import GlobalDDOS from "./globalDDOS";

const Index: FC = (): ReactElement => {
  return (
    <div className="sys-manage-userlist-container">
      <SideBar
        title="客户管理"
        linkList={[
          { text: "全部", path: "/platform/all" },
          { text: "中国加速(ICP)", path: "/platform/china-icp" },
          { text: "中国加速", path: "/platform/china" },
          { text: "全球加速", path: "/platform/global" },
          { text: "全球DDOS", path: "/platform/global-ddos" },
          { text: "自定义平台", path: "/platform/custom-platform" },
        ]}
      ></SideBar>
      <Switch>
        <Route path="/platform/all" component={All}></Route>
        <Route path="/platform/china-icp" component={ChinaICP}></Route>
        <Route path="/platform/china" component={China}></Route>
        <Route path="/platform/global" component={Global}></Route>
        <Route path="/platform/global-ddos" component={GlobalDDOS}></Route>
        <Route path="/platform/custom-platform" component={CusPlat}></Route>

        <Redirect to="/platform/all"></Redirect>
      </Switch>
    </div>
  );
};

export default Index;
