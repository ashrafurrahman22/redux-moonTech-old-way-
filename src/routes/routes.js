import Error from "../Pages/Error/Error";
import Featured from "../Pages/Featured/Featured";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: Cart } = require("../Pages/Home/Cart");
const { default: Home } = require("../Pages/Home/Home");

const routes = createBrowserRouter([
    {
        path : '/',
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/cart",
            element: <Cart />,
          },
          {
            path: "/top-rated",
            element: <Featured />,
          },
          {
            path: "*",
            element: <Error />,
          }
        ]
    }
]);

export default routes