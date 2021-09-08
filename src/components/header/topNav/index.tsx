import React, { FC, ReactElement } from "react";
import "./index.less";
import { MailFilled, CaretDownFilled } from "@ant-design/icons";
import UserDetail from "./userDetail";
import { Dropdown } from "antd";

const Index: FC = (): ReactElement => {
  return (
    //顶部右边导航
    <ul className="header-other">
      <li>
        {/* 下拉导航组件 */}
        <Dropdown overlay={<UserDetail></UserDetail>}>
          <span>
            ernest@greypanel.com
            <CaretDownFilled />
          </span>
        </Dropdown>
      </li>

      <li>帮助</li>
      <li>
        <MailFilled />
      </li>
      <li>GREYPANEL</li>
    </ul>
  );
};

export default Index;
