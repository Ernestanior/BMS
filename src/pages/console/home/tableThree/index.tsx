import React, { FC, ReactElement } from "react";
import "./index.less";
import p1 from "assets/images/greypanel.png";
import p2 from "assets/images/cloudflare.png";
import p3 from "assets/images/alibaba.jpeg";

const Index: FC = (): ReactElement => {
  return (
    <div className="home-site">
      <span className="home-box-title">可用的CDN</span>
      <section className="home-image">
        <img alt="" src={p1}></img>
        <img alt="" src={p2}></img>
        <img alt="" src={p3}></img>
      </section>
    </div>
  );
};

export default Index;
