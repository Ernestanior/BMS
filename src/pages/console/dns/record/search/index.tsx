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
  // input输入内容
  const [input, setInput] = React.useState<String>("");
  // 允许Enter回车键触发搜索
  const handleEnter = (e: { keyCode: number }) => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };
  // 筛选组件的展示切换
  const [show, setShow] = React.useState<Boolean>(false);
  // 保存筛选内容并发布
  const onSearch = () => PubSub.publish("DnsRecordSearch", { domain: input });
  // 输入框尾部搜索图标
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
            placeholder="域查询"
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
