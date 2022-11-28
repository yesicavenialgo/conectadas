import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Friends, Login, Logout, SignUp } from "./pages";
import { SearchMovie } from "./pages/SearchMovie";
import { Profile } from "./pages/Profile";
import { AuthProvider } from "./contexts/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />}></Route>
          <Route path="Login" element={<Login />}></Route>
          <Route path="SignUp" element={<SignUp />}>
            {" "}
          </Route>
          <Route path="Profile" element={<Profile />}>
            {" "}
          </Route>
          <Route path="Logout" element={<Logout />}>
            {" "}
          </Route>
          <Route path="SearchMovie" element={<SearchMovie />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </>
);
