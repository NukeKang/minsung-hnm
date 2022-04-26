import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import NavBar from "./component/NavBar";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);

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
        <Route path="/" element={<Navigate to="/?q=" replace />} />
      </Routes>
    </div>
  );
}

export default App;
