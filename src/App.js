import { Route, Routes} from "react-router-dom";
import Header from "./pages/header/Header";
import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import './App.css'


function App() {
  return (
    <>
    <Header></Header>
    <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Signup></Signup>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>

    </Routes>
   </>
  );
}

export default App;
