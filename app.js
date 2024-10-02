import React from "react";
import ReactDOM from "react-dom/client";

// React Element

// 1. tag
// 2. attributes
// 3. children

// React - JSX
// JSX -> JavaScript Syntax (HTML like syntax in JavaScript)
const JsxHeading = () => <h1 id="heading">Ro🚀💕</h1>


//React component
// 1. Class based components - old way of writing code (no one uses this)
// 2. Functional components - new way of writing code
const HeadingComponent = () => (
    <div id="container">
    <h1 id="heading">Ro_HeadingComponent</h1>
    <JsxHeading/>   
    </div>
    );
//const Headingcomp2 = () => <h1 id="heading">Ro_HeadingComponent2</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); //renders the object
//root.render(jsxHeading); //renders the JSX
root.render(<HeadingComponent/>); //renders the component
//root.render(<Headingcomp2/>); //renders the component
