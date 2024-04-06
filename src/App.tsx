import React, { useEffect } from "react";
import { ConfigProvider, Layout, Menu } from "antd";
import NavLogo from "./assets/nav-logo.svg";
import { apwRed } from "./colors";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { CAPACITY_URLS, GALLERY_URLs, SECTION_ID, router } from "./router";
import "./fonts/Termina.ttf";
import SendQuoteButton from "./components/SendQuoteButton";
import ReactGA from "react-ga4";

const MEASUREMENT_ID = "G-2325Q4CX55"; //GA4 EASUREMENT_ID
ReactGA.initialize(MEASUREMENT_ID);

const { Header, Content } = Layout;

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
  {
    key: SECTION_ID.GALLERY,
    label: "Gallery",
    children: [GALLERY_URLs.CUSTOMERS, GALLERY_URLs.PRODUCT_GALLERY],
  },
  { key: SECTION_ID.ABOUT_US, label: "About Us" },
  { key: SECTION_ID.CONTACT_US, label: "Contact Us" },
];

const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

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
          className="px-[15px] lg:px-[90px] sm:px-[15px] xs:"
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
            className="mx-5 font-semibold uppercase"
            mode="horizontal"
            defaultSelectedKeys={[SECTION_ID.HOME]}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
              fontSize: "1rem",
            }}
            onClick={(menuItem) => {
              let path = menuItem.keyPath
                .filter((path) => path !== "rc-menu-more") //avoid antd default collapsed menu class
                .reverse()
                .join("/");
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
          <div>
            <SendQuoteButton />
          </div>
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
