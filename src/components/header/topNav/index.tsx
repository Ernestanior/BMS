import React, { FC, ReactElement } from "react";
import "./index.less";
import { MailFilled, CaretDownFilled } from "@ant-design/icons";
import UserDetail from "./userDetail";
import { Dropdown } from "antd";

const Index: FC = (): ReactElement => {
  return (
    <ul className="header-other">
      <li>
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
