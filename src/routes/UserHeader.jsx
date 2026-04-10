import React from "react";
import Home from "../pages/Home"
import About from "../pages/About";
import Contant from "../pages/Contant";
import Services from "../pages/Services";

const UserHeader =[
    {path:"/", element:<Home/>},
    {path:"/about", element:<About/>},
    {path:"/contant", element:<Contant/>},
    {path:"/services", element:<Services/>}
];

export default UserHeader;