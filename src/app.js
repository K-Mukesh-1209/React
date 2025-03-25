import React from "react";
import ReactDOM from "react-dom/client";
//React.createElement => ReactElement-JS object =>HTMLElement(render) 
import Header from "./components/Header.js";
import Body from "./components/Body.js"




//not using keys(not acceptable)<<<<<index as key<<<<<<<<<<<<unique id(best practice)

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
