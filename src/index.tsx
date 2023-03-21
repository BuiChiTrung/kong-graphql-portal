import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import {createGraphiQLFetcher} from "@graphiql/toolkit";
import GraphiQL from "graphiql";
import ServiceList from "./containers/ServiceList";
import ServicePlayground from "./containers/ServicePlayground";
import ServiceVisualize from "./containers/ServiceVisualize";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "services",
                element: <ServiceList/>
            },
            {
                path: "services/:name/playground",
                element: <ServicePlayground/>,
            },
            {
                path: "services/:name/visualize",
                element: <ServiceVisualize/>,
            },
        ],
    },
    {
        path: "/rbac",
        element: <ServiceVisualize/>,
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
