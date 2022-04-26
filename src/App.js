import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import NavBar from "./component/NavBar";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  return (
    <div>
      <NavBar
        isAuthenticate={authenticate}
        onHandleAuthenticate={setAuthenticate}
      />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login onHandleAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute isAuthenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
