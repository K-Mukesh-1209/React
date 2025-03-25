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

//React Components->class,Functional
//React functional component
const HeadingComponent = () =>{
    return <h1>Functional Component</h1>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
root.render(<HeadingComponent/>);