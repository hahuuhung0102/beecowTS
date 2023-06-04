import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/page-not-found";
import ProductPage from "./pages/product";

function App() {

  const homePageRoute = {
    key: "app.homePage",
    position: 0,
    path: "/",
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

  return (
    <Router>
        <Switch>
          <Route key={homePageRoute.key} path={homePageRoute.path} component={homePageRoute.component} />
          <Route key={productPageRoute.key} path={productPageRoute.path} component={productPageRoute.component} />
          <Route key={notFoundPageRoute.key} path={notFoundPageRoute.path} component={notFoundPageRoute.component} />
        </Switch>
    </Router>
  );
}

export default App;
