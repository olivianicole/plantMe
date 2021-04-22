import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./components/Account";
import SplashPage from "./components/SplashPage";
import Home from "./components/Home";
import ListingPage from "./components/ListingPage";
import Checkout from "./components/Checkout";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer"
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
        <ProtectedRoute path="/account" exact={true} authenticated={authenticated}>
          <Account />
        </ProtectedRoute>
        <ProtectedRoute path="/home" authenticated={authenticated}>
          <Home />
        </ProtectedRoute>
        <ProtectedRoute path="/listing/:id" authenticated={authenticated}>
          <ListingPage />
        </ProtectedRoute>
        <ProtectedRoute path="/checkout" authenticated={authenticated}>
          <Checkout />
        </ProtectedRoute>
        <ProtectedRoute path="/favorites" authenticated={authenticated}>
          <Favorites />
        </ProtectedRoute>
      </Switch>
      <Footer authenticated={authenticated} setAuthenticated={setAuthenticated} />
    </BrowserRouter>
  );
}

export default App;
