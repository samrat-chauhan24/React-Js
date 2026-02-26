import React from 'react'
import ReactDom from 'react-dom/client'


// react allows us to create our own tags, like App
import App from './App.jsx'
import Sam from './sam.jsx'


// react creates it's own DOM known as virtual DOM
const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Sam />
  </React.StrictMode>
)
