import { Table } from "antd";
import React, { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import "./index.less";

const Index: FC = (): ReactElement => {
  const dataSource = [
    {
      key: 1,
      title: "tstny",
    },
    { key: 2, title: "Tony" },
    { key: 3, title: "test" },
    { key: 4, title: "test" },
    { key: 5, title: "test" },
    { key: 6, title: "test" },
    { key: 7, title: "test" },
    { key: 8, title: "test" },
    { key: 9, title: "test" },
  ];
  const columns = [
    {
      title: (
        <NavLink to="/console/cdn-site" className="home-table-title">
          站点列表
        </NavLink>
      ),
      dataIndex: "title",
      key: "title",
      render: (
        text:
          | boolean
          | React.ReactChild
          | React.ReactFragment
          | React.ReactPortal
          | null
          | undefined
      ) => <NavLink to="/console/cdn-site">{text}</NavLink>,
    },
  ];
  return (
    <Table
      className="home-site"
      size="middle"
      dataSource={dataSource}
      columns={columns}
      pagination={{ pageSize: 6 }}
    />
  );
};

export default Index;
