import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/layouts/MainLayout";
import AddProducts from "./pages/AddProducts";
import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Report from "./pages/Report";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/AddProducts" element={<AddProducts />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Analytics" element={<Analytics />}></Route>
          <Route path="/Report" element={<Report />}></Route>
          <Route path="*" element={<AddProducts />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
