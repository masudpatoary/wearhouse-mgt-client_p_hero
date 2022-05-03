import './App.css';
import NavBar from './Component/Pages/NavBar/Navbar';
import { Routes, Route } from "react-router-dom";
import HomePage from './Component/Pages/Home/HomePage/HomePage';
import Register from './Component/Authentication/Register/Register';
import Login from './Component/Authentication/Login/Login';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
