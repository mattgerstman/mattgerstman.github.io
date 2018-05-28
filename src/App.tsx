import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as styles from "./App.css";
import getStore from "./data/store";
import { LandingPage } from "./pages/landing-page";
import RecordPage from "./pages/record-page";

function App() {
  return (
    <Provider store={getStore()}>
      <Router>
        <div className={styles.container}>
          <Route exact={true} path="/" component={LandingPage} />
          <Route path="/records" component={RecordPage} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
