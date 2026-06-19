import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// function CustomApp() {


//   return (
//     <>
//         <h1>Hello World | Vite-Mohit </h1>
//         <h1>Welcome to My App</h1>
//         <p>Hey Its Mohit Nandanwar</p>
//     </>
    
//   )
// }

const CustomReactElement ={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
},
content:'Click on me To navigate google page'
}

const AnotherElement =(
    <a href='https://www.google.com' target='_blank'> Click on me To navigate google page</a>
)

const myName='My name is Mohit nandanwar'

const ReactElement = React.createElement(
    'a',
    {
        href:'https://www.youtube.com',
        target:'_blank'
    },
    'Click on me To navigate youtube page',myName
)


createRoot(document.getElementById('root')).render(

    // <App/>
    // <CustomApp/>
    // CustomApp()
//   CustomReactElement()

// AnotherElement()
    //   AnotherElement
    ReactElement
)

