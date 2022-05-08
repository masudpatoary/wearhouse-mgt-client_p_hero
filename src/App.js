import './App.css';
import NavBar from './Component/Pages/NavBar/Navbar';
import { Routes, Route } from "react-router-dom";
import HomePage from './Component/Pages/Home/HomePage/HomePage';
import Register from './Component/Authentication/Register/Register';
import Login from './Component/Authentication/Login/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InventoryDetail from './Component/Pages/Inventories/InventoryDetail';
import AddInventory from './Component/Pages/Inventories/AddInventory';
import RequireAuth from './Component/Authentication/RequireAuth/RequireAuth';
import ManageInventories from './Component/Pages/Inventories/Inventories';
import Footer from './Component/Pages/Footer/Footer';


function App() {
  return (
    <div className="App mx-auto">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/manageinventories' element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>}>
        </Route>
        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <InventoryDetail></InventoryDetail>
          </RequireAuth>}>
        </Route>
        <Route path='addinventory' element={
          <RequireAuth>
            <AddInventory></AddInventory>
          </RequireAuth>}>
        </Route>
        <Route path='*' element={<div>Not Found</div>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
