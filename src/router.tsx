import { RouteProps } from "react-router-dom";
import Error from "./Error";
import { Space } from "antd";
import Home from "./components/Home";
import Capacity from "./components/Capacity";
import HowItWork from "./components/HowItWork";
import Network from "./components/Network";
import AboutUs from "./components/AboutUs";
import Material from "./components/capacities/Material";

export const router: RouteProps[] = [
  {
    path: "/capacity/material",
    element: (
      <Material/>
    ),
    errorElement: <Error />,
  },
  {
    path: "/",
    element: (
      <Space size={[0, 30]} direction="vertical">
        <Home />
        <Capacity />
        <HowItWork />
        <Network />
        <AboutUs />
      </Space>
    ),
    errorElement: <Error />,
  },
];
