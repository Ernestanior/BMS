import React, { FC, ReactElement } from "react";
import { Table, Switch, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PubSub from "pubsub-js";
import Search from "./search";
import "./index.less";
import { NavLink } from "react-router-dom";

interface IData {
  key: string;
  sitename: string;
  cdnServing: string;
  operate: string;
  dimains: number;
  records: number;
  speed: number;
  status: string;
  usable: string;
}
enum Status {
  故障 = "故障",
  正常 = "正常",
}
const columns = [
  {
    title: "站点名称",
    dataIndex: "sitename",
  },
  {
    title: "CDN服务商",
    dataIndex: "cdnServing",
  },
  {
    title: "状态",
    dataIndex: "status",
  },
  {
    title: "域名数",
    dataIndex: "domains",
  },
  {
    title: "记录数",
    dataIndex: "records",
  },
  {
    title: "可用率",
    dataIndex: "usable",
  },
  {
    title: "连接速度",
    dataIndex: "speed",
  },
  {
    title: "操作",
    dataIndex: "operate",
  },
];
let source: any = [];
for (let i = 0; i < 11; i++) {
  source.push({
    key: "g" + i,
    sitename: `test site ${i}`,
    cdnServing: "GreyPanel",
    // status: <span className="site-list-status well">正常</span>,
    status: Status.正常,
    domains: 7,
    records: 200,
    usable: "99%",
    speed: 1999,
    operate: "开启",
  });
}
for (let i = 0; i < 7; i++) {
  source.push({
    key: "a" + i,
    sitename: `test site ${i}`,
    cdnServing: "AliCloud",
    // status: <span className="site-list-status error">故障</span>,
    status: Status.故障,
    domains: 7,
    records: 200,
    usable: "99%",
    speed: 1999,
    operate: "关闭",
  });
}

const Index: FC = (): ReactElement => {
  const [selectedRowKeys, setSelectedKey] = React.useState<number[]>([]);
  const [data, setData] = React.useState<IData[]>(source);
  // console.log(selectedRowKeys);
  // let token: string;
  const onSelectChange = (selectedRowKeys: any) => {
    setSelectedKey(selectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  React.useEffect(() => {
    PubSub.subscribe("SiteSearch", (_: any, condition: any) => {
      if (condition) {
        let newSource: IData[] = source;
        for (let i in condition) {
          if (condition[i]) {
            // console.log(i);
            // console.log(condition[i]);
            if (i === "cdnServing" && condition[i].length !== 0) {
              // let result: IData[] = [];
              // condition[i].forEach((element: string) => {
              //   result = [
              //     ...result,
              //     ...newSource.filter((item: any) => {
              //       return item[i] === element;
              //     }),
              //   ];
              // });
              const result = condition[i].reduce(
                (list: IData[], currElement: string) => [
                  ...list,
                  ...newSource.filter((item: IData) => {
                    return item.cdnServing === currElement;
                  }),
                ],
                []
              );
              // console.log(result);
              newSource = result;
            } else {
              newSource = newSource.filter(
                (item: any) => item[i].indexOf(condition[i]) !== -1
              );
            }
          }
        }
        setData(newSource);
      } else {
        setData(source);
      }
      // return () => {
      // PubSub.unsubscribe(token);
      // };
    });
  }, []);

  const newlist = data.map((item: any) => {
    return {
      key: item.key,
      // sitename: item.sitename,
      sitename: (
        <NavLink to={`/console/site/${item.sitename}`}>{item.sitename}</NavLink>
      ),
      cdnServing: item.cdnServing,
      status: (
        <span
          className={`site-list-status ${
            item.status === "正常" ? "well" : "error"
          }`}
        >
          {item.status}
        </span>
      ),
      domains: item.domains,
      records: item.records,
      usable: item.usable,
      speed: item.speed,
      operate: (
        <Switch
          className="site-list-switch"
          checkedChildren="开启"
          unCheckedChildren="关闭"
          defaultChecked={item.operate === "开启" ? true : false}
        />
      ),
    };
  });
  // console.log(newlist);
  return (
    <>
      <Search></Search>
      <div className="site-list-container">
        <Button type="primary" className="site-list-button">
          <PlusOutlined />
          新增站点
        </Button>
        <Button
          type="primary"
          disabled={selectedRowKeys.length === 0 ? true : false}
          className="site-list-button"
        >
          批量删除
        </Button>
        <Button
          type="primary"
          disabled={selectedRowKeys.length === 0 ? true : false}
          className="site-list-button"
        >
          批量禁用
        </Button>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={newlist}
        ></Table>
      </div>
    </>
  );
};

export default Index;
