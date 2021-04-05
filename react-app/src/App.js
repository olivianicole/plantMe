import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import UsersList from "./components/UsersList";
import Account from "./components/Account";
import SplashPage from "./components/SplashPage";
import Home from "./components/Home";
import { authenticate } from "./store/session";

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const onLoad = async() => {
      const user = await dispatch(authenticate());
      if (!user.errors) {
       await setAuthenticated(true)
      }
      await setLoaded(true);
    };
    onLoad();
  }, [dispatch]);

  if (loaded === false) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path="/" exact={true} authenticated={authenticated} setAuthenticated={setAuthenticated}>
          <SplashPage authenticated={authenticated} setAuthenticated={setAuthenticated}/>
        </Route>
        {/* <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
        </ProtectedRoute> */}
        <ProtectedRoute path="/account" exact={true} authenticated={authenticated}>
          <Account />
        </ProtectedRoute>
        <ProtectedRoute path="/home" authenticated={authenticated}>
          <Home />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
