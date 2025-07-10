import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/parandComponents/layouts/MainLayout";
import AddProducts from "./pages/AddProducts";
import ProductPage from "./appPages/ProductPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/AddProducts" element={<AddProducts />}></Route>
        </Route>
        <Route path="/productPage" element={<ProductPage />}></Route>

        
      </Routes>
    </div>
  );
}

export default App;
