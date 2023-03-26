import React from "react";
import ReactDOMClient from "react-dom/client";
// import App from "./App";

import "./index.css";
import Todo from "./Todo";

ReactDOMClient.createRoot(document.getElementById("root")).
    render(
        <Todo/>
    );


