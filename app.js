import React from "react";
import ReactDOM from "react-dom/client";
//React.createElement => ReactElement-JS object =>HTMLElement(render) 

const heading = React.createElement(
    "h1",
    {id:"heading"},
    "React"
);
console.log(heading)
//JSX is not html in javascript ,it is like a html or XML like sentence
//JSX (transpiled before it reaches the JS )-PARCEL -Babel

//JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxheading = <h1 id="heading"> React using jsx</h1>;
console.log(jsxheading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);