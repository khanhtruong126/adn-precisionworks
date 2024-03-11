import React from "react";
import { ConfigProvider, Layout, Menu } from "antd";
import NavLogo from "./assets/nav-logo.svg";
import { apwRed } from "./colors";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { CAPACITY_URLS, router } from "./router";
import "./fonts/Termina.ttf";

const { Header, Content } = Layout;

export const SECTION_ID = Object.freeze({
  HOME: "home",
  CAPABILITIES: "capabilities",
  HOWITWORK: "howitwork",
  ABOUT_US: "about-us",
  GALLERY: "gallery",
  CONTACT_US: "contact-us",
});

const items = [
  { key: SECTION_ID.HOME, label: "Home" },
  {
    key: SECTION_ID.CAPABILITIES,
    label: "Capabilities",
    children: [
      CAPACITY_URLS.CNC_MACHINING,
      CAPACITY_URLS.MATERIAL,
      CAPACITY_URLS.SHEET_METAL_FABRICATION,
    ],
  },
  { key: SECTION_ID.HOWITWORK, label: "How It Work" },
  { key: SECTION_ID.GALLERY, label: "Product Gallery" },
  { key: SECTION_ID.CONTACT_US, label: "Contact Us" },
];

const App: React.FC = () => {
  const navigate = useNavigate();

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
      <Layout className="overflow-visible max-w-[100vw]">
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
            <Link to="/">
              <img src={NavLogo} alt="App Logo" width={150} />
            </Link>
          </div>
          <Menu
            className="mx-5"
            mode="horizontal"
            defaultSelectedKeys={[SECTION_ID.HOME]}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
              fontSize: "1.2rem",
            }}
            onClick={(menuItem) => {
              let path = menuItem.keyPath.reverse().join("/");
              if (path === "home") {
                path = "/";
              }
              navigate(path);
              const el = document.getElementById(menuItem.key);
              if (el) {
                setTimeout(() => {
                  el.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 500);
              }
            }}
          />
        </Header>
        <Content>
          <div
            style={{
              paddingTop: "2rem",
              minHeight: 380,
              backgroundColor: "white",
            }}
          >
            <Routes>
              {router.map((route) => (
                <Route {...route} key={route.path} />
              ))}
            </Routes>
          </div>
        </Content>
        {/* <Footer style={{ textAlign: "center", paddingTop: 0 }}>ADN Precision Works</Footer> */}
      </Layout>
    </ConfigProvider>
  );
};

export default App;
