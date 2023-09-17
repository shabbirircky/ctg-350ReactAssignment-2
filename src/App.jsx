import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { NotFoundPage } from "./pages/NotFoundPage";

import NavBar from "./Component/NavBar"
import Footer from "./Component/Footer";

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/notfoundpage" element={<NotFoundPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App
