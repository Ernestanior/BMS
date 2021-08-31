import React, { FC, ReactElement } from "react";
import "./index.less";
import {
  MailFilled,
  CaretDownFilled,
  UnorderedListOutlined,
} from "@ant-design/icons";
import UserDetail from "./userDetail";
import { Dropdown } from "antd";

interface IProps {}
const dropDown = (
  <div style={{ position: "absolute", left: "-107px" }}>
    <UserDetail></UserDetail>
  </div>
);

const Index: FC<IProps> = ({}: IProps): ReactElement => {
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
      <li>
        <Dropdown overlay={dropDown} placement="bottomLeft">
          <UnorderedListOutlined />
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
