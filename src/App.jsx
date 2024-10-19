import { BrowserRouter, Route, Routes } from "react-router-dom";
import "notyf/notyf.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Home from "./pages/Home/Index";
import Manager from "./pages/Manager/Staff";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manager' element={<Manager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;