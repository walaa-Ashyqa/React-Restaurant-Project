
import Footer from './components/footer/Footer.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Home from './components/home/Home.jsx';
import Products from './components/products/Products.jsx';
import NoPage from './components/noPage/NoPage.jsx';
import Restaurant from './components/restaurant/Restaurant.jsx';
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {

  return (
    <>
    
  
    
    <BrowserRouter >
    <Navbar/>
      <Routes>
        <Route path="/"  element={ <Home/>}/>
        <Route path="/products"  element={ <Products/>}/>
        <Route path="/restaurant"  element={ <Restaurant/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
