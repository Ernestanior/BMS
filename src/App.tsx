import React from "react";
import "./App.less";
import Login from "@/pages/login";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Console from "@/pages/console";
function App() {
  const accountInfo = "ernest"
  if (!accountInfo) {
    return <Login />
  }
  return (
    <div className="App">
      {/* 页面头部区域 */}
      <Header></Header>
      {/* 页面内容区域 */}
      <section className="frame-section">
        <Console></Console>
      </section>
      {/* 页面尾部区域 */}
      <Footer></Footer>
    </div>
  );
}

export default App;