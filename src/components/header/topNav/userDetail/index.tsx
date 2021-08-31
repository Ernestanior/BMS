import React, { FC, ReactElement } from "react";
import { Row, Col } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import "./index.less";
import { useHistory } from "react-router";
interface IProps {}

const Index: FC<IProps> = ({}: IProps): ReactElement => {
  const history = useHistory();
  const funcList = [
    "个人概况",
    "修改代码",
    "登录限制",
    "API管理",
    "账户管理",
    "服务商管理",
    "证书管理",
  ];
  const handleClick = () => {
    history.replace("/login");
  };
  return (
    <div className="header-user-container">
      <Row className="header-user-funclist">
        {funcList.map((item) => {
          return (
            <Col span={12} className="header-user-funcitem">
              {item}
            </Col>
          );
        })}
      </Row>
      <div className="header-user-box">
        <span>xLab-001</span>
        <span>你最后登录时间是： 2019年5月31日 星期五 14:47</span>
        <button className="header-user-logout" onClick={handleClick}>
          <PoweroffOutlined /> 退出
        </button>
      </div>
    </div>
  );
};

export default Index;
