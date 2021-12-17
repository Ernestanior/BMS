import React, { FC, ReactElement } from "react";
import { Table } from "antd";
import PubSub from "pubsub-js";
import Search from "./search";
import "./index.less";

interface IData {
  key: string;
  domain: string;
  name: string;
  type: string;
  circuit: string;
  record: string;
  mx: number;
  ttl: number;
  remark: string;
  customer: string;
  status: Status;
}
enum Status {
  enable = "Enable",
  disable = "Disable",
}
const columns = [
  {
    title: "域",
    dataIndex: "domain",
  },
  {
    title: "域名",
    dataIndex: "name",
  },
  {
    title: "记录类型",
    dataIndex: "type",
  },
  {
    title: "线路",
    dataIndex: "circuit",
  },
  {
    title: "记录值",
    dataIndex: "record",
  },
  {
    title: "MX/权重",
    dataIndex: "mx",
  },
  {
    title: "TTL",
    dataIndex: "ttl",
  },
  {
    title: "备注",
    dataIndex: "remark",
  },
  {
    title: "客户",
    dataIndex: "customer",
  },
  {
    title: "状态",
    dataIndex: "status",
  },
];
let source: any = [
  {
    key: "d1",
    domain: "@",
    name: "edgetest.tk",
    type: "A",
    circuit: "Default",
    record: "1.1.1.1",
    mx: 1,
    ttl: 86400,
    remark: "-",
    customer: "pp@greypanel.com",
    status: Status.enable,
  },
  {
    key: "d2",
    domain: "api",
    name: "zim5.com",
    type: "A",
    circuit: "Default",
    record: "adgsad",
    mx: 1,
    ttl: 600,
    remark: "-",
    customer: "pp@greypanel.com",
    status: Status.enable,
  },
  {
    key: "d3",
    domain: "abc",
    name: "zim5.com",
    type: "CNAME",
    circuit: "Default",
    record: "vvv",
    mx: 1,
    ttl: 6400,
    remark: "-",
    customer: "pp@greypanel.com",
    status: Status.enable,
  },
  {
    key: "d4",
    domain: "iii",
    name: "zim5.com",
    type: "CNAME",
    circuit: "Default",
    record: "vvv",
    mx: 1,
    ttl: 6400,
    remark: "-",
    customer: "pp@greypanel.com",
    status: Status.enable,
  },
  {
    key: "d4",
    domain: "iii",
    name: "zim5.com",
    type: "CNAME",
    circuit: "Default",
    record: "www",
    mx: 1,
    ttl: 6400,
    remark: "-",
    customer: "pp@greypanel.com",
    status: Status.disable,
  },
];

const Index: FC = (): ReactElement => {
  // 表格数据
  const [data, setData] = React.useState<IData[]>(source);
  // let token: string;

  React.useEffect(() => {
    // 筛选功能
    const token = PubSub.subscribe(
      "DnsRecordSearch",
      (_: any, condition: any) => {
        if (condition) {
          let newSource: IData[] = source;
          for (let i in condition) {
            if (condition[i]) {
              newSource = newSource.filter(
                (item: any) => item[i].indexOf(condition[i]) !== -1
              );
            }
          }
          setData(newSource);
        }
        // 如果无筛选条件则加载全部
        else {
          setData(source);
        }
        //组件销毁或更新前取消订阅
        return () => {
          PubSub.unsubscribe(token);
        };
      }
    );
  }, []);
  // 数据美化渲染
  const newlist = data.map((item: any) => {
    return {
      key: item.key,
      domain: item.domain,
      name: item.name,
      type: item.type,
      circuit: item.circuit,
      record: item.record,
      mx: item.mx,
      ttl: item.ttl,
      remark: item.remark,
      customer: item.customer,
      status: (
        <span
          className={`site-list-status ${item.status === "Enable" ? "well" : "error"
            }`}
        >
          {item.status}
        </span>
      ),
    };
  });
  return (
    <>
      <Search></Search>
      <div className="site-list-container">
        <Table columns={columns} dataSource={newlist}></Table>
      </div>
    </>
  );
};

export default Index;
