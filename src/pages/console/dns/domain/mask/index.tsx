import React, { FC } from "react";
import "./index.less";
import { Drawer, Button, Form, Input } from "antd";

interface IProps {
  visible: boolean;
  onClose: () => void;
  onUpdate: Function;
}
enum Status {
  disable = "Disable",
  enable = "Enable",
}
const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const Index: FC<IProps> = ({ visible, onClose, onUpdate }: IProps) => {
  // 提交按钮
  const onFinish = (value: any) => {
    console.log(value.domain);
    // 数据子传父
    onUpdate({
      key: "aa",
      domain: value.domain,
      status: Status.enable,
      note: "==",
      customer: value.customer,
      action: "action",
    });
  };
  return (
    <>
      <Drawer
        title="新增站点"
        placement="left"
        onClose={onClose}
        width={600}
        visible={visible}
        className="add-site-mask"
      >
        <Form
          onFinish={onFinish}
          initialValues={{ protocol: "HTTPS", websocket: false }}
        >
          <Form.Item
            {...formItemLayout}
            name="domain"
            label="域名"
            rules={[
              {
                required: true,
                message: "Domain name cannot be empty!",
              },
            ]}
          >
            <Input placeholder="Input domain name" />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            name="customer"
            label="客户"
            rules={[
              {
                required: true,
                message: "Customer cannot be empty!",
              },
            ]}
          >
            <Input placeholder="Input Customer" />
          </Form.Item>
          <Form.Item labelCol={{ span: 24 }} name="note" label="Note">
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 20, span: 4 }}>
            <Button className="default-button" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default Index;
