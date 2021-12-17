import React, { FC, ReactElement } from "react";
import { Form, Input, Select, Button, Tag } from "antd";
import PubSub from "pubsub-js";
import "./index.less";
interface IResult {
  domain: string;
  status: string;
  record: string;
  type: string;
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
    record: "",
    type: "",
  });

  // 提交事件,发布订阅
  const onFinish = (values: any) => {
    setResult(values);
    PubSub.publish("DnsRecordSearch", values);
  };
  // 筛选tag标签关闭事件,动态渲染数据
  const handleClose = (key: string, value: string | []) => {
    setResult({ ...result, [key]: value });
    PubSub.publish("DnsRecordSearch", { ...result, [key]: value });
  };
  return (
    <div className="search-box-bg">
      <Form
        className="search-box-container"
        onFinish={onFinish}
        {...formItemLayout}
      >
        <Form.Item label="域" name="domain">
          <Input />
        </Form.Item>
        <Form.Item label="记录类型" name="type">
          <Input />
        </Form.Item>
        <Form.Item label="记录值" name="record">
          <Input />
        </Form.Item>
        <Form.Item
          label="状态"
          name="status"
          className="search-box-select-item"
        >
          <Select allowClear>
            <Option value="Enable">Enable</Option>
            <Option value="Disable">Disable</Option>
          </Select>
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
        {result.domain || result.status || result.type || result.record
          ? "当前位置:"
          : ""}
        {result.type ? (
          <Tag closable onClose={() => handleClose("type", "")}>
            操作: {result.type}
          </Tag>
        ) : (
          ""
        )}
        {result.record ? (
          <Tag closable onClose={() => handleClose("record", "")}>
            操作: {result.record}
          </Tag>
        ) : (
          ""
        )}
        {result.domain ? (
          <Tag closable onClose={() => handleClose("domain", "")}>
            域: {result.domain}
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
      </span>
    </div>
  );
};

export default Index;
