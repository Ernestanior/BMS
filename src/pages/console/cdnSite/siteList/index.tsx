import React, { FC, ReactElement } from "react";
import { Table, Switch, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PubSub from "pubsub-js";
import Search from "./search";
import Mask from "./mask";
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
    status: Status.故障,
    domains: 7,
    records: 200,
    usable: "99%",
    speed: 1999,
    operate: "关闭",
  });
}

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
  const handleBan = () => {
    setData(
      data.map((item) => {
        if (selectedRowKeys.indexOf(item.key) !== -1) {
          item.status = Status.故障;
          item.operate = "关闭";
          console.log(item);
        }
        return item;
      })
    );
  };
  React.useEffect(() => {
    // 筛选功能
    const token = PubSub.subscribe("SiteSearch", (_: any, condition: any) => {
      if (condition) {
        let newSource: IData[] = source;
        for (let i in condition) {
          if (condition[i]) {
            // CDN服务商列表筛选
            if (i === "cdnServing" && condition[i].length !== 0) {
              // 此时condition[i]为选中的列表，例如['Greypanel','aliCloud']
              const result = condition[i].reduce(
                // list为初始列表,currElement为condition[i]列表中的每个值,例如'Greypanel', 'alicloud'
                (list: IData[], currElement: string) => [
                  ...list,
                  ...newSource.filter((item: IData) => {
                    return item.cdnServing === currElement;
                  }),
                ],
                []
              );
              newSource = result;
            }
            //其他条件的筛选
            else {
              newSource = newSource.filter(
                (item: any) => item[i].indexOf(condition[i]) !== -1
              );
            }
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
    });
  }, []);
  // 数据美化渲染
  const newlist = data.map((item: any) => {
    return {
      key: item.key,
      sitename: (
        <NavLink to={`/cdn-site/${item.sitename}`}>{item.sitename}</NavLink>
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
          key={item.operate}
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
        <Button
          type="primary"
          className="site-list-button"
          onClick={() => toggleMask(!mask)}
        >
          <PlusOutlined />
          新增站点
        </Button>
        <Button
          type="primary"
          disabled={selectedRowKeys.length === 0 ? true : false}
          className="site-list-button"
          onClick={handleDetele}
        >
          批量删除
        </Button>
        <Button
          type="primary"
          disabled={selectedRowKeys.length === 0 ? true : false}
          className="site-list-button"
          onClick={handleBan}
        >
          批量禁用
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
