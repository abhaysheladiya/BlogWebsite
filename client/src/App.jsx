import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer";

const App = () =>{
  return( 
  <>

  {/** This is browser web url */}
  <BrowserRouter>  
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/service" element={<Service />}/>
    <Route path="/register" element={<Register />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="*" element={<Error />} />     {/** This is universal search show error */}
  </Routes>
  
  < Footer />
  </BrowserRouter>
  </>
  )
};

export default App;