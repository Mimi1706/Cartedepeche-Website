import "./App.css"

import Header from "./components/Header/Header"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
