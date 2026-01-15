import React from 'react';
import { createBrowserRouter } from 'react-router';
import RootLayOut from '../RootLayout/RootLayOut';
import Home from '../Componrnt/Home/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayOut,
        children: [
            { index: true, Component: Home },
        ]
    }
]);
