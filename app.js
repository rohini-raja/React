import React from "react";
import ReactDOM from "react-dom/client";

/*
    <div id = "parent">
        <div id = "child1">
            <h1>"Rohini Rajasimman Learning React"</h1>
            <h2>"Learning Day 2"</h2>
        </div>
        <div id = "child2">
            <h1>"Rohini Rajasimman Learning React Child 2"</h1>
            <h2>"Learning Day 2 of child 2"</h2>
        </div>
    </div>
*/

const parent = React.createElement("div",
    {id:"parent"},
    [React.createElement("div",{
        id:"child1"
    },
    [React.createElement("h1",{},"Rohini Rajasimman Learning React🚀"), React.createElement("h2",{},"Learning Day 2")]), 
    React.createElement("div",{
        id:"child2"
    },
    [React.createElement("h1",{},"Rohini Rajasimman Learning React Child 2"), React.createElement("h2",{},"Learning Day 2 of child 2")])]
);


const heading = React.createElement("h1",{id:"heading",xyz:"abd"},"Hello World From React!")
console.log(heading); //object 
const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(heading);
root.render(parent);