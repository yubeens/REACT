import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Home from "./routers/Home.jsx";
import About from "./routers/About.jsx";
import Detail from "./components/Detail.jsx";

function App() {
  return (
      <BrowserRouter>
          <Navigation />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='about' element={<About />}></Route>
                <Route path='/detail' element={<Detail />}></Route>
            </Routes>
      </BrowserRouter>
  )
}
export default App
