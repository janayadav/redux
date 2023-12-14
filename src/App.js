import { Fragment } from "react";
import Account from "./Account";
import Form from "./Form";
import "./App.css";
import "./store";
function App() {
  return (
    <Fragment>
      <Form />

      <Account />
    </Fragment>
  );
}

export default App;
