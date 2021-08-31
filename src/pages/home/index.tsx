import { Row, Col } from "antd";
import React, { FC, ReactElement } from "react";
import "./index.less";
import TableOne from "./tableOne";
import TableTwo from "./tableTwo";
import TableThree from "./tableThree";
import TableFour from "./tableFour";
interface IProps {}

const Index: FC<IProps> = ({}: IProps): ReactElement => {
  return (
    <div>
      <Row gutter={30}>
        <Col lg={8} md={12} sm={24} xs={24}>
          <TableOne />
        </Col>
        <Col lg={8} md={12} sm={24} xs={24}>
          <TableTwo />
        </Col>
        <Col lg={8} md={12} sm={24} xs={24}>
          <TableThree />
        </Col>
        <Col span={24}>
          <TableFour />
        </Col>
      </Row>
    </div>
  );
};

export default Index;
