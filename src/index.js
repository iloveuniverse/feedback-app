//This file is basically the entry point to react


import React from 'react'
//basically allows us to interact with document object model in the browser.
import ReactDom from 'react-dom'
// this is the global CSS file for the app.
import './index.css'
import App from './App'

//ReactDom allows us to interact with the DOM so iss mei render function hota, to interact with the Browser.

//this function takes two arguments, one is what to display and the other is the element in the DOM jismei show karna.

//React mei we know sab components mei divided hotte and humara root component hotta App naam ka...so App.js krte file aur iss component ko lette render mei....baki jo bhi components banate, they are embedded in the App component.

// React.StrictMode does nothing special visually, it just activates additional checks and warnings.
ReactDom.render(
    <React.StrictMode>
    <App />
    </React.StrictMode>, 
    document.getElementById('root')
)