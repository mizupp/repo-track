import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {createRoot} from "react-dom/client"
import {Provider} from "react-redux";
import store from "./store";

import App from "./App";

const container  = document.getElementById("root")
const root = createRoot(container);

root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
        
    </Router>
)