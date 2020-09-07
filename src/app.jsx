import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { ThemeProvider } from "react-jss";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "ant-design-pro/dist/ant-design-pro.css";

import routes from "./components/page/routes";
import Nav from "./components/page/nav/nav";
import ToastContainer from "./components/page/notification/toast";
import posterinoTheme from "./style/theme";
import configureStore from "./redux/store/configureStore";

const storeConfig = configureStore();

class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={storeConfig.store}>
          <PersistGate loading={<div>loading</div>} persistor={storeConfig.persistor}>
            <Router>
              <ThemeProvider theme={posterinoTheme}>
                <Layout>
                  <Nav />

                  <Layout style={{ marginTop: 64, height: `calc(100vh - 64px)` }}>
                    <Layout style={{ overflowY: "auto" }}>
                      {routes}
                      <ToastContainer />
                    </Layout>
                    <Layout.Footer style={{ textAlign: "center" }}>
                      Posterino ©2019 Created by GLuersen
                    </Layout.Footer>
                  </Layout>
                </Layout>
              </ThemeProvider>
            </Router>
          </PersistGate>
        </Provider>,
      </>
    );
  }
}

export default App;
