import React, { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
const Index: FC = (): ReactElement => {
  return (
    <div className="site-container">
      <Outlet />
    </div>
  );
};

export default Index;
