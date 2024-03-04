import "./App.scss";
import {BrowserRouter} from "react-router-dom";
import Layout from "./UI/Layout";
import Routing from "./routes";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Layout>
          <Routing />
        </Layout>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
