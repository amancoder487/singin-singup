import React from 'react'
import Header from './Compoment/Header';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Login from './Compoment/Login';
import Singup from './Singup'

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>

        <Route path='/' element={< Login/>}/>
        <Route path='/singup' element={<Singup/>}/>
      </Routes>
    </BrowserRouter>
      
      

  )
}

export default App


// import React from 'react'
// import Login from './Compoment/Login'

// const App = () => {
//   return (
//     <div>
//       <Login />
//     </div>
//   )
// }

// export default App