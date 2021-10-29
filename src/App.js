import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./pages/Form/Form";
import PreView from "./pages/PreView/PreView";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" component={Form} exact={true} />
          <Route path="/preview" component={PreView} exact={true} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
