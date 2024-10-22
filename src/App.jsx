import Navbar from "./components/navbar"
import Home from "./components/home"
import Category from "./components/category"
import Popular from "./components/popular"
import Venues from "./components/venues"
import Footer from "./components/footer"
import Theatres from "./components/theatres"
import Register from "./components/register"
import Signin from "./components/signin"
import { Routes, Route } from "react-router-dom"


function App() {
  
  
  return (
    <>
     
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/category" element={<Category />} />
        </Routes>
        <Routes>
          <Route path="/theatre" element={<Theatres />} />
        </Routes>
        <Routes>
          <Route path="/venues" element={<Venues />} />
        </Routes>
        <Routes>
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Routes>
          <Route path='/register' element={<Register />}/>
        </Routes>
        

        
        {/* <Home />
        <Category />
        <Popular />
        <Theatres />
        <Venues /> */}

        <Footer />

        

    </>
  )
}

export default App
