import React, { FC, ReactElement } from "react";
import "./index.less";
// import { Pie } from "@ant-design/charts";

const Index: FC = (): ReactElement => {
  // var data = [
  //   {
  //     type: "GreyCDN",
  //     value: 50,
  //   },
  //   {
  //     type: "Cloudflare",
  //     value: 20,
  //   },
  //   {
  //     type: "Amazon Cloud",
  //     value: 15,
  //   },
  //   {
  //     type: "Alibaba Cloud",
  //     value: 15,
  //   },
  // ];
  // var config = {
  //   appendPadding: 10,
  //   data: data,
  //   angleField: "value",
  //   colorField: "type",
  //   radius: 1,
  //   innerRadius: 0.6,
  //   legend: true,
  //   label: {
  //     type: "inner",
  //     offset: "-50%",
  //     content: "{value}",
  //     style: {
  //       textAlign: "center",
  //       fontSize: 14,
  //     },
  //   },
  //   interactions: [{ type: "element-selected" }, { type: "element-active" }],
  //   statistic: {
  //     title: false,
  //     content: {
  //       style: {
  //         whiteSpace: "pre-wrap",
  //         overflow: "hidden",
  //         textOverflow: "ellipsis",
  //       },
  //       content: "100%",
  //     },
  //   },
  // };
  return (
    <div className="home-site">
      <span className="home-box-title">使用量比</span>
      <div className="home-pie">
        {/* <Pie {...config}></Pie> */}
      </div>
    </div>
  );
};

export default Index;
