import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { HomePage, CategoryPage, ProductPage, CheckoutPage } from "./pages";
import { Header, CartModal } from "./components";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/product/:productId" component={ProductPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/:categoryName" component={CategoryPage} />
          <Route path="/" component={HomePage} exact />
        </Switch>
      </Container>
      <CartModal />
    </Router>
  );
}
