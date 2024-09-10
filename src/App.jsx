import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Cart from "./routes/Cart";
import Nav from "./components/Nav";
import "./App.css"

function App() {
  return (
    <>
      <Nav/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App