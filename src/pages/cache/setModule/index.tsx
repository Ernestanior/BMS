import React, { FC, ReactElement } from "react";
import "./index.less";
import { Row, Col, Dropdown, Menu, Button } from "antd";
import { CaretDownFilled } from "@ant-design/icons";

interface IProps {
  imgSource: string;
  text: string;
  way: string;
}

const Index: FC<IProps> = ({ imgSource, text, way }: IProps): ReactElement => {
  const [setting, setSetting] = React.useState(way);
  const handleMenuClick = (e: any) => {
    setSetting(e.key);
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="全站缓存">全站缓存</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="自定义">自定义</Menu.Item>
    </Menu>
  );
  return (
    <Row className="cache-set-module" gutter={8}>
      <Col span={5} className="cache-set-module-img">
        <img src={imgSource} alt="" />
      </Col>
      <Col span={11} className="cache-set-module-text">
        <span>{text} 缓存模块</span>
      </Col>
      <Col span={8} className="cache-set-module-operate">
        <span>缓存方式</span>
        <Dropdown
          overlay={menu}
          trigger={["click"]}
          className="cache-set-module-list"
        >
          <Button>
            {setting}
            <CaretDownFilled />
          </Button>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default Index;
