import HomePage from "./home";
import NotFoundPage from "./page-not-found";
import ProductPage from "./product";

// Loop through all the folder in pages and collect all the route.js files
// and add them to the routes array.
var routes = [];

const homePageRoute = {
  key: "app.homePage",
  position: 0,
  path: "/home-Page",
  name: "Page not found",
  component: HomePage,
  child: [],
};

const productPageRoute = {
  key: "app.productPage",
  position: 1,
  path: "/product-page",
  name: "Page not found",
  component: ProductPage,
  child: [],
};

const notFoundPageRoute = {
  key: "app.notFoundPage",
  position: 2,
  path: "/not-found-page",
  name: "Page not found",
  component: NotFoundPage,
  child: [],
};

routes.push(homePageRoute);
routes.push(productPageRoute);
routes.push(notFoundPageRoute);

export default routes;
