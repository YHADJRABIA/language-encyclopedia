import React, { useState, useEffect } from "react";
import "./styles/app.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import i18n from "./i18n/i18n"; // Translating content
import Loading from "./components/Loading";
import { DataProvider } from "./components/Context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);

  // Equivalent to ComponentWillMount in class components. Renders executes when the component has finished rendering
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  /*  if (loading) return <Loading />;
  else */
  return (
    <>
      {/* Passes data to all wrapped components. */}
      <DataProvider>
        {/* Enables routing with all wrapped components. */}
        <Header />
        <Main />
        <Footer />
      </DataProvider>
      <Router>
        {/* Enables the rendering of one component only. */}
        <Switch>
          {/*         <Route path={["/", "/home"]} exact component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/shop" exact component={Shop}></Route>
            <Route path="/shop/:id" component={Item}></Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
