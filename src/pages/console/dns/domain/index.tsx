import React, { FC, ReactElement } from "react";
import { Table, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PubSub from "pubsub-js";
import Search from "./search";
import Mask from "./mask";
import "./index.less";
import { NavLink } from "react-router-dom";

interface IData {
  key: string;
  domain: string;
  note: string;
  customer: string;
  status: string;
  action: string;
}
enum Status {
  enable = "Enable",
  disable = "Disable",
}
const columns = [
  {
    title: "域名",
    dataIndex: "domain",
  },
  {
    title: "域状态",
    dataIndex: "status",
  },
  {
    title: "记录",
    dataIndex: "note",
  },
  {
    title: "客户",
    dataIndex: "customer",
  },
  {
    title: "操作",
    dataIndex: "action",
  },
];
let source: any = [
  {
    key: "g1",
    domain: "abc.com",
    status: Status.enable,
    note: "-",
    customer: "pp@greypanel.com",
    action: "action",
  },
  {
    key: "g2",
    domain: "a.com",
    status: Status.disable,
    note: "-",
    customer: "ii@greypanel.com",
    action: "action",
  },
  {
    key: "g3",
    domain: "b.com",
    status: Status.enable,
    note: "-",
    customer: "ii@greypanel.com",
    action: "action",
  },
  {
    key: "a1",
    domain: "v.com",
    status: Status.disable,
    note: "+",
    customer: "ii@gmail.com",
    action: "action",
  },
  {
    key: "a2",
    domain: "t.com",
    status: Status.disable,
    note: "+",
    customer: "rr@gmail.com",
    action: "action",
  },
];

const Index: FC = (): ReactElement => {
  // 表格内选中的数据的key集合
  const [selectedRowKeys, setSelectedKey] = React.useState<string[]>([]);
  // 表格数据
  const [data, setData] = React.useState<IData[]>(source);
  // 蒙版切换器
  const [mask, toggleMask] = React.useState<boolean>(false);
  // let token: string;

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys: any) => {
      setSelectedKey(selectedRowKeys);
    },
  };
  // 批量删除
  const handleDetele = () => {
    setData(data.filter((item) => selectedRowKeys.indexOf(item.key) === -1));
  };
  // 批量禁用
  const handleEnable = () => {
    setData(
      data.map((item) => {
        if (selectedRowKeys.indexOf(item.key) !== -1) {
          item.status = Status.enable;
        }
        return item;
      })
    );
  };
  const handleDisable = () => {
    setData(
      data.map((item) => {
        if (selectedRowKeys.indexOf(item.key) !== -1) {
          item.status = Status.disable;
        }
        return item;
      })
    );
  };
  React.useEffect(() => {
    // 筛选功能
    const token = PubSub.subscribe(
      "DnsDomainSearch",
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
      domain: <NavLink to={`/dns/${item.domain}`}>{item.domain}</NavLink>,
      status: (
        <span
          className={`site-list-status ${item.status === "Enable" ? "well" : "error"
            }`}
        >
          {item.status}
        </span>
      ),
      note: item.note,
      customer: item.customer,
      action: item.action,
    };
  });
  // console.log(newlist);
  return (
    <>
      <Search></Search>
      <div className="site-list-container">
        <Button
          type="primary"
          className="site-list-button"
          onClick={() => toggleMask(!mask)}
        >
          <PlusOutlined />
          新增域名
        </Button>
        <Button
          type="primary"
          disabled={selectedRowKeys.length === 0 ? true : false}
          className="site-list-button"
          onClick={handleEnable}
        >
          批量启动
        </Button>
        <Button
          type="primary"
          disabled={selectedRowKeys.length === 0 ? true : false}
          className="site-list-button"
          onClick={handleDisable}
        >
          批量禁用
        </Button>
        <Button
          type="primary"
          disabled={selectedRowKeys.length === 0 ? true : false}
          className="site-list-button"
          onClick={handleDetele}
        >
          批量删除
        </Button>

        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={newlist}
        ></Table>
      </div>
      {/* 蒙层与添加模块 */}
      <Mask
        visible={mask}
        onClose={() => toggleMask(!mask)}
        onUpdate={(item: any) => {
          setData([item, ...data]);
          toggleMask(!mask);
        }}
      ></Mask>
    </>
  );
};

export default Index;
