import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./reduxthunk/Login";
import { Provider } from "react-redux";
import store from "./reduxthunk/redux/store";
import User from "./reduxthunk/Users";
import { useState } from "react";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<User />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
