import React, { FC, ReactElement } from "react";
import "./index.less";
import { Row, Col } from "antd";
interface IProps {}

const Index: FC<IProps> = ({}: IProps): ReactElement => {
  return (
    <div className="footer-bg">
      <Row className="footer-container">
        <Col lg={12} md={24} sm={24} xs={24}>
          <aside className="footer-aside">
            <h1>GREYPANEL</h1>
            <span>We give you the edge.</span>
            <span>
              The edge - It`s the next frontier of business Innovation. It`s
              where users connect, where digital life is experienced, where
              clouds, devices and st streams of data come together. And it`s
              where any company that wants to compete and win needs to be.
            </span>
          </aside>
        </Col>
        <Col lg={8} md={24} sm={24} xs={24}>
          <section className="footer-section">
            <ul>
              <li>Center Privacy</li>
              <li>Statement</li>
            </ul>
            <span>Get in touch</span>
            <span>+65 6284 6860</span>
            <span>www.greypanel.com/contact</span>
            <span>Copyright @ 2018 GREYPANEL All Rights Reserved</span>
          </section>
        </Col>
      </Row>
    </div>
  );
};

export default Index;
