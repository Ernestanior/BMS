import React, { FC, ReactElement } from "react";
import { Row, Col } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import "./index.less";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

const Index: FC = (): ReactElement => {
  const history = useHistory();
  const funcList = [
    { key: "info", title: "个人概况" },
    { key: "reset-pwd", title: "修改代码" },
    { key: "security", title: "安全设置" },
    { key: "log", title: "操作记录" },
    { key: "payment", title: "支付系统" },
    { key: "", title: "服务商管理" },
    { key: "", title: "证书管理" },
  ];
  // 退出登录按钮
  const handleClick = () => {
    history.replace("/login");
  };
  return (
    // 下拉导航组件
    <div className="header-user-container">
      <Row className="header-user-funclist">
        {/* 导航列表 */}
        {funcList.map((item, index) => {
          return (
            <Col span={12} key={index} className="header-user-funcitem">
              <NavLink
                to={`/user/${item.key}`}
                className="header-user-funcitem-text"
              >
                {item.title}
              </NavLink>
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
