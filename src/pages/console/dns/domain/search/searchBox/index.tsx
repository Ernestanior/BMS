import React, { FC, ReactElement } from "react";
import { Form, Checkbox, Input, Row, Col, Select, Button, Tag } from "antd";
import PubSub from "pubsub-js";
import "./index.less";
interface IResult {
  domain: string;
  status: string;
  customer: string;
}
const { Option } = Select;
const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 21 },
};
const Index: FC = (): ReactElement => {
  // 筛选结果汇总并保存
  const [result, setResult] = React.useState<IResult>({
    domain: "",
    status: "",
    customer: "",
  });

  // 提交事件,发布订阅
  const onFinish = (values: any) => {
    setResult(values);
    PubSub.publish("DnsDomainSearch", values);
  };
  // 筛选tag标签关闭事件,动态渲染数据
  const handleClose = (key: string, value: string | []) => {
    setResult({ ...result, [key]: value });
    PubSub.publish("DnsDomainSearch", { ...result, [key]: value });
  };
  return (
    <div className="search-box-bg">
      <Form
        className="search-box-container"
        onFinish={onFinish}
        {...formItemLayout}
      >
        <Form.Item label="域名" name="domain">
          <Input />
        </Form.Item>
        <Form.Item
          label="域状态"
          name="status"
          className="search-box-select-item"
        >
          <Select allowClear>
            <Option value="Enable">Enable</Option>
            <Option value="Disable">Disable</Option>
          </Select>
        </Form.Item>
        <Form.Item label="客户" name="customer">
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 2, offset: 22 }}>
          <Button
            type="primary"
            htmlType="submit"
            className="search-box-button"
          >
            查询
          </Button>
        </Form.Item>
      </Form>
      {/* 筛选tag标签 */}
      <span className="search-tag">
        {result.domain || result.status || result.customer ? "当前位置:" : ""}
        {result.domain ? (
          <Tag closable onClose={() => handleClose("domain", "")}>
            域名: {result.domain}
          </Tag>
        ) : (
          ""
        )}
        {result.status ? (
          <Tag closable onClose={() => handleClose("status", "")}>
            状态: {result.status}
          </Tag>
        ) : (
          ""
        )}
        {result.customer ? (
          <Tag closable onClose={() => handleClose("customer", "")}>
            操作: {result.customer}
          </Tag>
        ) : (
          ""
        )}
      </span>
    </div>
  );
};

export default Index;
