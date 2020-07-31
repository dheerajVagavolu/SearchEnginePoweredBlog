import React from "react";

import HomeScreen from "./components/screens/HomeScreen";
import LoginScreen from "./components/screens/LoginScreen";
import UserProfile from "./components/screens/UserProfile";

import SearchPage from "./components/screens/SearchPage";

import { BrowserRouter, Route } from "react-router-dom";
import AddStoryScreen from "./components/screens/AddStoryScreen";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <HomeScreen />
      </Route>

      <Route exact path="/login">
        <LoginScreen />
      </Route>

      <Route exact path="/profile">
        <UserProfile />
      </Route>

      <Route exact path="/addstory">
        <AddStoryScreen />
      </Route>

      <Route exact path="/SearchPage/:query" component={SearchPage} />
    </BrowserRouter>
  );
}

export default App;
