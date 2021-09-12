import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { HomePage, CategoryPage, ProductPage } from "./pages";
import { Header } from "./components";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route path="/:categoryName" component={CategoryPage} />
          <Route path="/product/:productId" component={ProductPage} />
          <Route path="/" component={HomePage} exact />
        </Switch>
      </Container>
    </Router>
  );
}
