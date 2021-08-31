import React, { FC, ReactElement } from "react";
import "./index.less";
import { Line } from "@ant-design/charts";

const Index: FC = (): ReactElement => {
  var data = [
    {
      day: "03/19",
      value: 1000,
    },
    {
      day: "03/20",
      value: 2000,
    },
    {
      day: "03/21",
      value: 1500,
    },
    {
      day: "03/22",
      value: 1100,
    },
    {
      day: "03/23",
      value: 1900,
    },
    {
      day: "03/24",
      value: 3500,
    },
    {
      day: "03/25",
      value: 2200,
    },
    {
      day: "03/26",
      value: 2500,
    },
    {
      day: "03/27",
      value: 1800,
    },
    {
      day: "03/28",
      value: 1300,
    },
    {
      day: "03/29",
      value: 2700,
    },
    {
      day: "03/30",
      value: 1900,
    },
    {
      day: "03/31",
      value: 2300,
    },
    {
      day: "04/01",
      value: 1300,
    },
    {
      day: "04/02",
      value: 1500,
    },
  ];
  var config = {
    data: data,
    xField: "day",
    yField: "value",
    label: {},
    point: {
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "#5B8FF9",
        lineWidth: 2,
      },
    },
    tooltip: { showMarkers: false },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: "#000",
          fill: "red",
        },
      },
    },
    interactions: [{ type: "marker-active" }],
  };
  return (
    <div className="home-line-chart-container">
      <a className="home-box-title">宽带统计</a>
      <div className="home-line-chart">
        <Line {...config} />
      </div>
    </div>
  );
};

export default Index;
