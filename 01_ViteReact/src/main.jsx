import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <>
    <h1>Custom App!</h1>
    </>
  )
}

/*
NOT TAKE THIS TYPE of PARAMETER but create similar structure

const reactElement = {
  type: 'a',
  props: {
      href: 'https://google.com',
      target: '_blank'
  },
  children: 'Click me to visit google'
}*/

// TAKE THIS TYPE
const username = "Bhaskar"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  username
)

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)


createRoot(document.getElementById('root')).render(

  reactElement

  // anotherElement

  // <MyApp />

    // <App />
)
