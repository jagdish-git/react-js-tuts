import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <div>
      <h2>MyAPP in main jsx</h2>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props:{
//       href:'https://google.com/',
//       target:'_blank'
//   },
//   children: 'Click me to visit GOOGLE'
// }

const anotherElement = (
  <a href="https://google.com/">Google</a>
)

const anotherUser = "Another User Name"

const ReactElement = React.createElement(
  'a',
  {href:'https://facebook.com/', target:'_blank'},
  'Click me',
  anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
