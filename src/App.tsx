import * as React from "react";
import * as styles from "./App.css";
import getStore from "./data/store";
import RecordPage from "./pages/record-page";
import { Provider } from "react-redux";
import { LandingPage } from "./pages/landing-page";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={getStore()}>
      <Router>
        <div className={styles.container}>
          <Route exact path="/" component={LandingPage} />
          <Route path="/records" component={RecordPage} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
