import React from "react";
import { Col, ConfigProvider, Layout, Menu, Row, Space } from "antd";
import NavLogo from "./assets/nav-logo.svg";
import { apwRed } from "./colors";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { router } from "./router";

const { Header, Content, Footer } = Layout;

export const SECTION_ID = Object.freeze({
  HOME: "home",
  CAPACITY: "capacity",
  HOWITWORK: "howitwork",
  ABOUT_US: "about-us",
  CONTACT_US: "contact-us",
});

const items = [
  { key: SECTION_ID.HOME, label: "Home" },
  {
    key: SECTION_ID.CAPACITY,
    label: "Capacity",
    children: [
      {
        label: "Milling",
        key: "milling",
      },
      {
        label: "Material",
        key: "material",
      },
      ,
    ],
  },
  { key: SECTION_ID.HOWITWORK, label: "How It Work" },
  { key: SECTION_ID.ABOUT_US, label: "About Us" },
  { key: SECTION_ID.CONTACT_US, label: "Contact Us" },
];

const App: React.FC = () => {
  const navigate = useNavigate();

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
            style={{ flex: 1, minWidth: 0, fontSize: "1.2rem" }}
            onClick={(menuItem) => {
              // handleClickScroll(menuItem.key);
              let path = menuItem.keyPath.reverse().join('/');
              if(path === "home") {
                path = "/"
              }
              navigate(path);
              console.log(menuItem.keyPath)
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
                <Route {...route} />
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
