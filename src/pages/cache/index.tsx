import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import React, { FC, ReactElement } from "react";
import SetModule from "./setModule";
import ClearModule from "./clearModule";
import "./index.less";
import alicloud from "assets/images/alicloud_logo.png";
import greypanel from "assets/images/g_logo.png";
interface IProps {}
interface IModuleList {
  id: number;
  img: string;
  text: string;
  way: string;
}

// moduleList=
const Index: FC<IProps> = ({}: IProps): ReactElement => {
  const [moduleList, setModuleList] = React.useState<IModuleList[]>([
    { id: 1, img: greypanel, text: "GreyPanel CDN", way: "全站缓存" },
    { id: 2, img: alicloud, text: "aliCloud CDN", way: "自定义" },
  ]);
  const HandleClearModule = (id: number) => {
    setModuleList(moduleList.filter((item) => item.id !== id));
  };
  return (
    <div className="cache-container">
      <Button type="primary" className="cache-button">
        <PlusOutlined />
        新增站点
      </Button>
      {moduleList.length ? (
        <>
          <div className="cache-setting">
            <h1 className="cache-box-title">缓存设置</h1>
            {moduleList.map((item) => (
              <SetModule imgSource={item.img} text={item.text} way={item.way} />
            ))}
          </div>
          <div className="cache-clearing">
            <h1 className="cache-box-title">缓存设置</h1>
            {moduleList.map((item) => (
              <ClearModule
                imgSource={item.img}
                text={item.text}
                id={item.id}
                operate={HandleClearModule}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="cache-setting">
          <h1 className="cache-box-title">缓存设置</h1>
          <span className="cache-box-empty">
            未检测到缓存模块，请添加缓存模块
          </span>
        </div>
      )}
    </div>
  );
};

export default Index;
