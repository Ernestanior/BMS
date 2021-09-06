import React, { FC } from "react";
import "./index.less";
import { Drawer, Button, Form, Input, Select, Switch } from "antd";
// interface IData {
//   key: string;
//   sitename: string;
//   cdnServing: string;
//   operate: string;
//   dimains: number;
//   records: number;
//   speed: number;
//   status: string;
//   usable: string;
// }
interface IProps {
  visible: boolean;
  onClose: () => void;
  onUpdate: Function;
}
enum Status {
  故障 = "故障",
  正常 = "正常",
}
const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const { Option } = Select;
const Index: FC<IProps> = ({ visible, onClose, onUpdate }: IProps) => {
  const onFinish = (value: any) => {
    console.log(value.sitename);
    onUpdate({
      key: "aa",
      sitename: value.sitename,
      cdnServing: "AliCloud",
      status: Status.正常,
      domains: 0,
      records: 0,
      usable: "99%",
      speed: 9999,
      operate: "关闭",
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
        <div className="add-site-mask-msg">
          <span>Important:</span>
          <span>
            Adding new site configuration will help guide you through the basic
            configuration of the site. The system provides multiple
            source-download loads, and users can configure them according to the
            relevant settings of the source site.
          </span>
          <ol>
            <li>
              Select the correct source source return mode. The default HTTP
              return source port is 80, and the HTTPS return source port is 443.
            </li>
            <li>
              The platform is the purchased platform. If you need other
              platforms, please contact sales team;
            </li>
            <li>
              After the new site configuration is completed and saved, go to the
              secondary menu of the DNS management menu: Record Management to
              perform domain name record pointing configuration.
            </li>
          </ol>
        </div>
        <Form
          onFinish={onFinish}
          initialValues={{ protocol: "HTTPS", websocket: false }}
        >
          <Form.Item
            {...formItemLayout}
            name="sitename"
            label="站点名称"
            rules={[
              {
                required: true,
                message: "Site name cannot be empty!",
              },
            ]}
          >
            <Input placeholder="Input site name" />
          </Form.Item>
          <h3>源设置</h3>
          <Form.Item
            {...formItemLayout}
            name="sourceAddress"
            label="源地址"
            rules={[
              {
                required: true,
                message: "Source Address cannot be empty!",
              },
            ]}
          >
            <Input placeholder="Input source address" />
          </Form.Item>
          <Form.Item {...formItemLayout} name="protocol" label="返回源协议">
            <Select>
              <Option value="HTTP">HTTP</Option>
              <Option value="HTTPS">HTTPS</Option>
            </Select>
          </Form.Item>
          <Form.Item name="websocket" label="Websocket" valuePropName="checked">
            <Switch
              checkedChildren="ON"
              unCheckedChildren="OFF"
              defaultChecked={false}
            />
          </Form.Item>
          <Form.Item name="note" label="Note">
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
