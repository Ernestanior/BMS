import React, { FC, ReactElement } from "react";
import { Form, Checkbox, Input, Row, Col, Select, Button, Tag } from "antd";
import PubSub from "pubsub-js";
import "./index.less";
interface IProps {}
interface IResult {
  cdnServing: [];
  operate: string;
  status: string;
  sitename: string;
}
const { Option } = Select;
const formItemLayout = {
  labelCol: { span: 2 },
  wrapperCol: { offset: 1, span: 21 },
};
const Index: FC<IProps> = ({}: IProps): ReactElement => {
  const [result, setResult] = React.useState<IResult>({
    cdnServing: [],
    operate: "",
    status: "",
    sitename: "",
  });
  // console.log(result);

  const handleClose = (key: string, value: string | []) => {
    setResult({ ...result, [key]: value });
  };
  const onFinish = (values: any) => {
    console.log(values);

    setResult(values);
    PubSub.publish("SiteSearch", values);
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
              <Col md={6} sm={12} xs={12}>
                <Checkbox value="GreyPanel" style={{ lineHeight: "32px" }}>
                  GreyPanel
                </Checkbox>
              </Col>
              <Col md={6} sm={12} xs={12}>
                <Checkbox value="AliCloud" style={{ lineHeight: "32px" }}>
                  AliCloud
                </Checkbox>
              </Col>
              <Col md={6} sm={12} xs={12}>
                <Checkbox value="Cloudflare" style={{ lineHeight: "32px" }}>
                  Cloudflare
                </Checkbox>
              </Col>
              <Col md={6} sm={12} xs={12}>
                <Checkbox value="Cloudfront" style={{ lineHeight: "32px" }}>
                  Cloudfront
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label="筛选条件" className="search-box-select-box">
          <Form.Item name="status" className="search-box-select-item">
            <Select placeholder="状态">
              <Option value="正常">正常</Option>
              <Option value="故障">故障</Option>
            </Select>
          </Form.Item>
          <Form.Item name="operate" className="search-box-select-item">
            <Select placeholder="操作">
              <Option value="开启">开启</Option>
              <Option value="关闭">关闭</Option>
            </Select>
          </Form.Item>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 2, offset: 22 }}>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
      </Form>
      <span className="search-tag">
        当前位置:
        {result.sitename ? (
          <Tag closable onClose={() => handleClose("站点名称", "")}>
            站点名称: {result.sitename}
          </Tag>
        ) : (
          ""
        )}
        {result.cdnServing ? (
          <Tag closable onClose={() => handleClose("CDN服务商", [])}>
            CDN服务商: {result.cdnServing.join("，")}
          </Tag>
        ) : (
          ""
        )}
        {result.status ? (
          <Tag closable onClose={() => handleClose("状态", "")}>
            状态: {result.status}
          </Tag>
        ) : (
          ""
        )}
        {result.operate ? (
          <Tag closable onClose={() => handleClose("操作", "")}>
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
