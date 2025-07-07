import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import AddProducts from "./pages/AddProducts";
import Home from "./pages/Home";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/AddProducts" element={<AddProducts />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="*" element={<AddProducts />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
