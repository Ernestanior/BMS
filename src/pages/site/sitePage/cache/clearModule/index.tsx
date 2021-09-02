import React, { FC, ReactElement } from "react";
import "./index.less";
import { Row, Col, Button } from "antd";

interface IProps {
  imgSource: string;
  text: string;
  id: number;
  operate: Function;
}

const Index: FC<IProps> = ({
  imgSource,
  text,
  id,
  operate,
}: IProps): ReactElement => {
  return (
    <Row className="cache-clear-module" gutter={8}>
      <Col span={5} className="cache-clear-module-img">
        <img src={imgSource} alt="" />
      </Col>
      <Col span={11} className="cache-clear-module-text">
        <span>{text} 缓存模块</span>
      </Col>
      <Col span={4} className="cache-clear-module-way">
        <span>全站清理</span>
      </Col>
      <Col span={4} className="cache-clear-module-operate">
        <Button
          className="cache-clear-module-button"
          onClick={() => operate(id)}
        >
          清理
        </Button>
      </Col>
    </Row>
  );
};

export default Index;
