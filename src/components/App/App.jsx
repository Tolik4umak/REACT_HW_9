import { Route, Routes } from "react-router-dom";
import AddProductPage from "../../pages/AddProductPage/AddProductPage";
import AllProductsPage from "../../pages/AllProductsPage/AllProductsPage";
import ProductSinglePage from "../../pages/ProductSinglePage/ProductSinglePage";
import Nav from "../Nav/Nav";
import s from './style.module.css'


function App() {
  return (
    <div>
      <Nav/>

      <Routes>
        <Route path="/" element={<AddProductPage/>}/>
        <Route path="/products" element={<AllProductsPage/>}/>
        <Route path="/product/:id" element={<ProductSinglePage/>}/>
      </Routes>

    </div>
  );
}

export default App;
