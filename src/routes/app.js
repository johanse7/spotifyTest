import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Layout from "../containers/layout/";
import GlobalStyle from "../styles/globalStyles";
import history from "../utils/history";
import Home from "../containers/home";
import Detail from "../containers/detail";
import NotFound from "../components/common/notFound";

const App = () => (
  <>
    <GlobalStyle />
    <Router history={history}>
      <Switch>
        <Route exact path={["/", "/detail-song/:id"]}>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail-song/:id" component={Detail} />
          </Layout>
        </Route>
        <Route path={["*"]}>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
