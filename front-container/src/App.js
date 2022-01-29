import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import ListPage from "./components/ListPage";
import { Switch } from "react-router-dom";
import ProtectedRoute from './auth/protected-route';
import NavBar from "./components/navBar";
import SocketProvider from "./components/SocketProvider";


function App() {

  return (
    <div>
      <NavBar />
      <SocketProvider>
      <Switch>
          <ProtectedRoute path="/" component={ListPage}/>
      </Switch>
      </SocketProvider>
    </div>
  );
}

export default App;
