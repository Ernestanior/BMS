import React, { ReactElement, FC } from "react";
import Header from "components/header";
import Footer from "components/footer";
import "./index.less";
import Console from "pages/console";

const Index: FC = (): ReactElement => {
  return (
    // 页面框架
    <>
      {/* 页面头部区域 */}
      <Header></Header>
      {/* 页面内容区域 */}
      <section className="frame-section">
        <Console></Console>
      </section>
      {/* 页面尾部区域 */}
      <Footer></Footer>
    </>
  );
};
export default Index;
