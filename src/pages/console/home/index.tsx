import { Row, Col } from "antd";
import React, { FC, ReactElement } from "react";
import "./index.less";
import TableOne from "./tableOne";
import TableTwo from "./tableTwo";
import TableThree from "./tableThree";
import TableFour from "./tableFour";

const Index: FC = (): ReactElement => {
  return (
    <div>
      <Row>
        <Col span={8}>
          <TableOne />
        </Col>
        <Col span={8}>
          <TableTwo />
        </Col>
        <Col span={8}>
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
