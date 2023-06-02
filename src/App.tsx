import React from 'react';
import {Route, Routes} from "react-router-dom";
import Error404 from "./components/pages/Error404";
import Login from "./components/pages/Login";
import Navigation from "./components/shared/Navigation/Navigation";
import Profile from "./components/pages/Profile";
import NewPassword from "./components/pages/NewPassword";
import {Password} from "@mui/icons-material";
import Registration from "./components/pages/Registration";
import Test from "./components/pages/Test";



function App() {
  return (
    <div className="App">
      <Navigation/>

        <Routes>
            <Route path='/' element={
                <Profile/>
            }></Route>
           <Route path='/error404' element={
               <Error404/>
           }></Route>

            <Route path="login" element={
             <Login/>
            }></Route>

            <Route path="new-password" element={
                <NewPassword/>
            }></Route>

            <Route path="password-recovery" element={
                <Password/>
            }></Route>

            <Route path="profile" element={
                <Profile/>
            }></Route>

            <Route path="registration" element={
                <Registration/>
            }></Route>

            <Route path="test" element={
                <Test/>
            }></Route>
        </Routes>
    </div>
  );
}

export default App;

