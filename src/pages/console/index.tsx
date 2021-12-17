import React, { FC, ReactElement } from "react";
import "./index.less";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./home";

import Site from "./cdnSite";
import SiteList from "./cdnSite/siteList";
import SitePage from "./cdnSite/sitePage";
import SiteConfig from "./cdnSite/sitePage/siteConfig";
import SiteDns from "./cdnSite/sitePage/siteConfig/dns";
import Domain from "./cdnSite/sitePage/siteConfig/dns/domain";
import PlatSet from "./cdnSite/sitePage/siteConfig/platSet";
import Source from "./cdnSite/sitePage/siteConfig/platSet/source";
import Ssl from "./cdnSite/sitePage/siteConfig/platSet/ssl";
import Basic from "./cdnSite/sitePage/siteConfig/platSet/basic";
import AIconfig from "./cdnSite/sitePage/siteConfig/AIconfig";
import Config from "./cdnSite/sitePage/siteConfig/AIconfig/config";
import AiLog from "./cdnSite/sitePage/siteConfig/AIconfig/log";
import Cache from "./cdnSite/sitePage/cache";
import Firewall from "./cdnSite/sitePage/firewall";
import IPWhite from "./cdnSite/sitePage/firewall/ipWhite";
import IPBlack from "./cdnSite/sitePage/firewall/ipBlack";
import UAWhite from "./cdnSite/sitePage/firewall/uaWhite";
import UABlack from "./cdnSite/sitePage/firewall/uaBlack";
import Statistics from "./cdnSite/sitePage/statistics";
import CdnUtil from "./cdnSite/sitePage/statistics/cdnUtil";
import StatPlatform from "./cdnSite/sitePage/statistics/platform";
import PlatAvail from "./cdnSite/sitePage/statistics/platform/availability";
import PlatResponse from "./cdnSite/sitePage/statistics/platform/responseTime";
import Usage from "./cdnSite/sitePage/statistics/usage";
import WebPerform from "./cdnSite/sitePage/statistics/webPerform";
import WebAvail from "./cdnSite/sitePage/statistics/webPerform/availability";
import WebResponse from "./cdnSite/sitePage/statistics/webPerform/responseTime";
import WebVisit from "./cdnSite/sitePage/statistics/webPerform/visitSource";
import PlatMana from "./cdnSite/sitePage/plat-mana";

import User from "./user";
import Info from "./user/info";
import Log from "./user/log";
import Admin from "./user/log/admin";
import Customer from "./user/log/customer";
import ResetPwd from "./user/resetPwd";
import Security from "./user/security";
import Restriction from "./user/security/restriction";
import Record from "./user/security/record";

import SysManage from "./sysManage";
import UserList from "./sysManage/userList";
import UserAdmin from "./sysManage/userList/admin";
import Om from "./sysManage/userList/om";
import Agent from "./sysManage/userList/agent";
import Sale from "./sysManage/userList/sale";

import SslManage from "./sslManage";
import Client from "./sslManage/client";
import Download from "./sslManage/download";
import Origin from "./sslManage/origin";

import CusManage from "./cusManage";
import Registered from "./cusManage/registered";
import Sales from "./cusManage/sales";

import Dns from "./dns";
import DnsDomain from "./dns/domain";
import DnsRecord from "./dns/record";

import Platform from "./platform";
import All from "./platform/all";
import China from "./platform/china";
import ChinaICP from "./platform/chinaICP";
import CusPlat from "./platform/CusPlat";
import Global from "./platform/global";
import GlobalDDOS from "./platform/globalDDOS";

import InfoInquiry from "./infoInquiry";
import CdnQuery from "./infoInquiry/cdnQuery";

const Index: FC = (): ReactElement => {
  return (
    <div>
      <Routes>
        <Route path="/user/*" element={<User />}>
          <Route path="info" element={<Info />}></Route>
          <Route path="log/*" element={<Log />}>
            <Route path="admin-log" element={<Admin />}></Route>
            <Route path="customer-log" element={<Customer />}></Route>
            <Route path="*" element={<Navigate to="admin-log" replace />} />
          </Route>
          <Route path="reset-pwd" element={<ResetPwd />}></Route>
          <Route path="security/*" element={<Security />}>
            <Route path="login-restriction" element={<Restriction />} />
            <Route path="login-records" element={<Record />}></Route>
            <Route path="*" element={<Navigate to="login-restriction" replace />} />
          </Route>
          <Route path="*" element={<Navigate to="info" replace />} />
        </Route>
        <Route path="/customer-management/*" element={<CusManage />}>
          <Route path="registered" element={<Registered />} />
          <Route path="sales" element={<Sales />}></Route>
          <Route path="*" element={<Navigate to="registered" replace />} />
        </Route>
        <Route path="/dns/*" element={<Dns />}>
          <Route path="record-management" element={<DnsRecord />}></Route>
          <Route path="domain-management" element={<DnsDomain />}></Route>
          <Route path="*" element={<Navigate to="domain-management" replace />} />
        </Route>
        <Route path="/cdn-site/*" element={<Site />}>
          <Route path=":sitename/*" element={<SitePage />}>
            <Route path="firewall/*" element={<Firewall />}>
              <Route path="ip-whitelist" element={<IPWhite />} />
              <Route path="ip-blacklist" element={<IPBlack />} />
              <Route path="ua-whitelist" element={<UAWhite />} />
              <Route path="ua-blacklist" element={<UABlack />} />
              <Route path="*" element={<Navigate replace to="ip-whitelist" />} />
            </Route>
            <Route path="statistics/*" element={<Statistics />}>
              <Route path="cdn-utilization" element={<CdnUtil />} />
              <Route path="platforms/*" element={<StatPlatform />}>
                <Route path="availability" element={<PlatAvail />} />
                <Route path="response-time" element={<PlatResponse />} />
                <Route path="*" element={<Navigate to="availability" replace />} />
              </Route>
              <Route path="usage" element={<Usage />} />
              <Route path="web-performance" element={<WebPerform />}>
                <Route path="availability" element={<WebAvail />} />
                <Route path="response-time" element={<WebResponse />} />
                <Route path="visit-source" element={<WebVisit />} />
                <Route path="*" element={<Navigate to="availability" replace />} />
              </Route>
              <Route path="*" element={<Navigate to="web-performance" replace />} />
            </Route>
            <Route path="platform-management" element={<PlatMana />} />
            <Route path="cache" element={<Cache />}></Route>
            <Route path="site-configuration/*" element={<SiteConfig />} >
              <Route path="platform-setting/*" element={<PlatSet />} >
                <Route path="source" element={<Source />} />
                <Route path="basic" element={<Basic />} />
                <Route path="ssl" element={<Ssl />} />
                <Route path="*" element={<Navigate to="source" replace />} />
              </Route>
              <Route path="ai-configuration/*" element={<AIconfig />} >
                <Route path="config" element={<Config />} />
                <Route path="log" element={<AiLog />} />
                <Route path="*" element={<Navigate to="config" replace />} />
              </Route>
              <Route path="dns/*" element={<SiteDns />} >
                <Route path="domain" element={<Domain />} />
                <Route path="*" element={<Navigate to="domain" replace />} />
              </Route>
              <Route path="*" element={<Navigate to="dns" replace />} />
            </Route>
            <Route path="*" element={<Navigate to="site-configuration" replace />} />
          </Route>
          <Route path="*" element={<SiteList />}></Route>
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/information-inquiry/*" element={<InfoInquiry />}>
          <Route path="cdn-query" element={<CdnQuery />} />
          <Route path="*" element={<Navigate to="cdn-query" replace />} />
        </Route>
        <Route path="/platform/*" element={<Platform />}>
          <Route path="all" element={<All />} />
          <Route path="china-icp" element={<ChinaICP />} />
          <Route path="china" element={<China />} />
          <Route path="global" element={<Global />} />
          <Route path="global-ddos" element={<GlobalDDOS />} />
          <Route path="custom-platform" element={<CusPlat />} />
          <Route path="*" element={<Navigate to="all" replace />} />
        </Route>
        <Route path="/ssl-management/*" element={<SslManage />}>
          <Route path="client-certificate" element={<Client />} />
          <Route path="origin-certificate" element={<Origin />} />
          <Route path="certificate-download" element={<Download />} />
          <Route path="*" element={<Navigate to="client-certificate" replace />} />
        </Route>
        <Route path="/system-management/*" element={<SysManage />}>
          <Route path="userlist/*" element={<UserList />}>
            <Route path="admin" element={<UserAdmin />} />
            <Route path="om" element={<Om />} />
            <Route path="sale" element={<Agent />} />
            <Route path="agent" element={<Sale />} />
            <Route path="*" element={<Navigate to="admin" replace />} />
          </Route>
          <Route path="*" element={<Navigate to="userlist"></Navigate>} />
        </Route>
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
};

export default Index;
