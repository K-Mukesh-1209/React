import React from "react";
import ReactDOM from "react-dom/client";
//React.createElement => ReactElement-JS object =>HTMLElement(render) 
import Header from "./components/Header.js";
import Body from "./components/Body.js"
import Aboutus from "./components/Aboutus.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Errmsg from "./components/Error.js";


//not using keys(not acceptable)<<<<<index as key<<<<<<<<<<<<unique id(best practice)

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

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
    },]
    }, 
    
    ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);


