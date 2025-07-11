import { Route, Routes } from "react-router-dom";
import "./App.css";
// import MainLayout from "./components/parandComponents/layouts/MainLayout";
// import AddProducts from "./pages/AddProducts";

import Resturan from "./appPages/Resturan";
import HomePage from "./appPages/HomePage";
import ProductPage from "./appPages/ProductPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route path="/resturan" element={<Resturan />}>
          <Route path="ProductPage" element={<ProductPage />}>
            
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
