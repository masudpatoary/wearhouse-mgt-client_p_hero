import './App.css';
import NavBar from './Component/Pages/NavBar/Navbar';
import { Routes, Route } from "react-router-dom";
import HomePage from './Component/Pages/Home/HomePage/HomePage';
import Register from './Component/Authentication/Register/Register';
import Login from './Component/Authentication/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Inventories from './Component/Pages/Inventories/Inventories';
import InventoryDetail from './Component/Pages/Inventories/InventoryDetail';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/inventories' element={<Inventories></Inventories>}></Route>
        <Route path='/inventory/:inventoryId' element={<InventoryDetail></InventoryDetail>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
