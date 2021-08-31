import React, { FC, ReactElement } from "react";
import "./index.less";
import Search from "./search";
import SiteList from "./siteList";
interface IProps {}

const Index: FC<IProps> = ({}: IProps): ReactElement => {
  return (
    <div>
      <Search />
      <SiteList />
    </div>
  );
};

export default Index;
