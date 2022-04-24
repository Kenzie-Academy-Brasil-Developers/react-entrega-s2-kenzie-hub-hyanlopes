import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Dashboard from "../Pages/Dashbord";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Register";
const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    if (token) {
      return setAuthenticated(true);
    } else {
      return setAuthenticated(false);
    }
  }, [authenticated]);
  return (
    <Switch>
      <Route exact path={"/"}>
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path={"/cadastro"}>
        <Cadastro authenticated={authenticated} />
      </Route>
      <Route path={"/dashboard"}>
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
};
export default Routes;
