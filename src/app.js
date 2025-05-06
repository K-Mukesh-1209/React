import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
//React.createElement => ReactElement-JS object =>HTMLElement(render) 
import Header from "./components/Header.js";
import Body from "./components/Body.js"
import Aboutus from "./components/Aboutus.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Errmsg from "./components/Error.js";
import RestaurentMenu from "./components/RestaurentMenu.js";
// import Grocery from "./components/Grocery.js";
//not using keys(not acceptable)<<<<<index as key<<<<<<<<<<<<unique id(best practice)
import { lazy } from "react";
const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const Grocery = lazy(()=> import("./components/Grocery.js"));

const approuter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        errorElement:<Errmsg />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<Aboutus />
            },
            {
                path:"/Grocery",
                element:<Suspense fallback={<h1> loading....</h1>}><Grocery/></Suspense>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurentMenu/>
            }]
    }, 
    
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);


