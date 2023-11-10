import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Base from '../pages/base/Base';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/RegisterUser'
import User from '../pages/user/User';


function MainRoute() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Base />} >
          <Route index element={<Home/>} />
          <Route path="/cadastre-se" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/usuario" element={<User/>} />
          <Route path="/editarUsuario/:id" element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoute;