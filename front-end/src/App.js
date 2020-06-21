import React from "react";

import HomeScreen from "./components/screens/HomeScreen";
import LoginScreen from "./components/screens/LoginScreen";
import UserProfile from "./components/screens/UserProfile";

import ErrorScreen from "./components/screens/ErrorScreen";

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

      <Route path="/login">
        <LoginScreen />
      </Route>

      <Route path="/profile">
        <UserProfile />
      </Route>

      <Route path="/addstory">
        <AddStoryScreen />
      </Route>

      <Route path="/SearchPage">
        <SearchPage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
