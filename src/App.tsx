import React from "react";
import { Col, ConfigProvider, Layout, Menu, Row, Space } from "antd";
import Capacity from "./components/Capacity";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Network from "./components/Network";
import NavLogo from "./assets/nav-logo.svg";
import { apwRed } from "./colors";

const { Header, Content, Footer } = Layout;

export const SECTION_ID = Object.freeze({
  HOME: "home",
  CAPACITY: "capacity",
  NETWORKS: "networks",
  ABOUT_US: "about-us",
});

const items = [
  { key: SECTION_ID.HOME, label: "Home" },
  { key: SECTION_ID.CAPACITY, label: "Capacity" },
  { key: SECTION_ID.NETWORKS, label: "Our Networks" },
  { key: SECTION_ID.ABOUT_US, label: "Contact Us" },
];

const App: React.FC = () => {
  const handleClickScroll = (key: string) => {
    const element = document.getElementById(key);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: apwRed,
          borderRadius: 2,

          // Alias Token
          colorBgContainer: "#fff",
        },
      }}
    >
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <div>
            <img src={NavLogo} alt="App Logo" width={200} />
          </div>
          <Menu
            className="mx-5"
            mode="horizontal"
            defaultSelectedKeys={[SECTION_ID.HOME]}
            items={items}
            style={{ flex: 1, minWidth: 0, fontSize: "1.2rem" }}
            onClick={(menuItem) => {
              handleClickScroll(menuItem.key);
            }}
          />
        </Header>
        <Content className="p-12">
          <div
            style={{
              padding: 24,
              minHeight: 380,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <Space size="large" direction="vertical">
              <Home />
              <Capacity />
              <Network />
              <AboutUs />
            </Space>
          </div>
        </Content>
        <Footer style={{ textAlign: "center", paddingTop: 0 }}>ADN Precision Works</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
