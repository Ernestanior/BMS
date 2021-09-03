import React, { FC, ReactElement } from "react";
import "./index.less";
import { Input, Button, Row, Col } from "antd";
import PubSub from "pubsub-js";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import SearchBox from "./searchBox";

const Index: FC = (): ReactElement => {
  const [show, setShow] = React.useState<Boolean>(false);
  const [input, setInput] = React.useState<String>("");
  const handleEnter = (e: { keyCode: number }) => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };
  const onSearch = () => PubSub.publish("SiteSearch", { sitename: input });
  const suffix = (
    <button onClick={onSearch} className="search-input-suffix">
      <SearchOutlined />
    </button>
  );

  return (
    <div>
      <Row>
        <Col span={19}>
          <Input
            placeholder="域名/站点查询"
            allowClear
            className="search-input"
            suffix={suffix}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyDown={handleEnter}
          />
        </Col>
        <Col offset={1} span={3}>
          <Button className="search-button" onClick={() => setShow(!show)}>
            显示筛选
            {show ? <CaretUpOutlined /> : <CaretDownOutlined />}
          </Button>
        </Col>
      </Row>
      {show ? <SearchBox /> : ""}
    </div>
  );
};

export default Index;
