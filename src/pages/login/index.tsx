import React, { FC } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./index.less";
import { useHistory } from "react-router-dom";
interface IProps {}
interface IValue {
  username: String;
  password: String | Number;
}
const Index: FC<IProps> = ({}: IProps) => {
  const history = useHistory();

  function handleChange(value: any) {
    console.log(value);
  }
  const onFinish = ({ username, password }: IValue) => {
    if (username === "ernest" && password === "123") {
      history.replace("/home");
    } else {
      alert("Invalid username or password");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo);
  };
  return (
    <div className="login-container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <div className="login-inputbox">
            <UserOutlined />
            <Input bordered={false} size="large" placeholder="Username" />
          </div>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <div className="login-inputbox">
            <LockOutlined />
            <Input.Password
              bordered={false}
              size="large"
              placeholder="Password"
            />
          </div>
        </Form.Item>
        <Form.Item>
          <ReCAPTCHA sitekey="Your key" onChange={handleChange}></ReCAPTCHA>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType="submit" className="login-submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Index;
