import React from "react";
import { Routes, Route ,Navigate} from "react-router-dom";
import Home from "./Components/Home/Home";
import Profile from "./Components/Hero/Profile";
import AxiosApi from "./Components/Axios/Axios";

function AuthenticatedApp() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to='/users'/>}/>
        <Route path="/users" element={<Home />}/>
        <Route path="/Axios" element={<AxiosApi />}/>
        <Route path="/profile/:user_id" element={<Profile />}/>
      </Routes>
    </>
  );
}


export default AuthenticatedApp;