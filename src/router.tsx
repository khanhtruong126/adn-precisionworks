import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Error from "./Error";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
]);
