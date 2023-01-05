import Home from "./PAGES/home/Home";
import Login from "./PAGES/login/Login";
import Register from "./PAGES/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//import Input from "./COMPONENTS/input/Input";
//import Pdf from "./COMPONENTS/pdf/Pdf";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/register" element={ <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
