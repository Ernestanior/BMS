import React, { FC, ReactElement } from "react";
import { Form, Checkbox, Input, Row, Col, Select, Button, Tag } from "antd";
import PubSub from "pubsub-js";
import "./index.less";
interface IResult {
  cdnServing: [];
  operate: string;
  status: string;
  sitename: string;
}
const { Option } = Select;
const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 21 },
};
const Index: FC = (): ReactElement => {
  // 筛选结果汇总并保存
  const [result, setResult] = React.useState<IResult>({
    cdnServing: [],
    operate: "",
    status: "",
    sitename: "",
  });

  // 提交事件,发布订阅
  const onFinish = (values: any) => {
    setResult(values);
    PubSub.publish("SiteSearch", values);
  };
  // 筛选tag标签关闭事件,动态渲染数据
  const handleClose = (key: string, value: string | []) => {
    setResult({ ...result, [key]: value });
    PubSub.publish("SiteSearch", { ...result, [key]: value });
  };
  return (
    <div className="search-box-bg">
      <Form
        className="search-box-container"
        onFinish={onFinish}
        {...formItemLayout}
      >
        <Form.Item label="站点名称" name="sitename">
          <Input />
        </Form.Item>
        <Form.Item name="cdnServing" label="CDN服务商">
          <Checkbox.Group style={{ width: "100%" }}>
            <Row>
              <Col span={6}>
                <Checkbox value="GreyPanel" style={{ lineHeight: "32px" }}>
                  GreyPanel
                </Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="AliCloud" style={{ lineHeight: "32px" }}>
                  AliCloud
                </Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="Cloudflare" style={{ lineHeight: "32px" }}>
                  Cloudflare
                </Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="Cloudfront" style={{ lineHeight: "32px" }}>
                  Cloudfront
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label="筛选条件" className="search-box-select-box">
          <Form.Item name="status" className="search-box-select-item">
            <Select placeholder="状态" allowClear>
              <Option value="正常">正常</Option>
              <Option value="故障">故障</Option>
            </Select>
          </Form.Item>
          <Form.Item name="operate" className="search-box-select-item">
            <Select placeholder="操作" allowClear>
              <Option value="开启">开启</Option>
              <Option value="关闭">关闭</Option>
            </Select>
          </Form.Item>
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
        {result.sitename ||
        (result.cdnServing && result.cdnServing.length) ||
        result.status ||
        result.operate
          ? "当前位置:"
          : ""}
        {result.sitename ? (
          <Tag closable onClose={() => handleClose("sitename", "")}>
            站点名称: {result.sitename}
          </Tag>
        ) : (
          ""
        )}
        {result.cdnServing && result.cdnServing.length ? (
          <Tag closable onClose={() => handleClose("cdnServing", [])}>
            CDN服务商: {result.cdnServing.join("，")}
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
        {result.operate ? (
          <Tag closable onClose={() => handleClose("operate", "")}>
            操作: {result.operate}
          </Tag>
        ) : (
          ""
        )}
      </span>
    </div>
  );
};

export default Index;
