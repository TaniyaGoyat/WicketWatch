import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer"
import HomePage from './pages/HomePage';
import Schedule from "./pages/Schedule"
import Squad from "./pages/SquadPage"
import Top from "./pages/TopPage";
import Venues from "./pages/VenuePage"
import { BrowserRouter,Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
  <BrowserRouter>
  <Header/>
  <div className='flex flex-col min-h-screen '>
  <Routes>
    <Route path={"/"} element={<HomePage />}></Route>
    <Route path={"/schedule"} element={<Schedule />}></Route>
    <Route path={"/squad"} element={<Squad />}></Route>
    <Route path={"/top"} element={<Top />}></Route>
    <Route path={"/venues"} element={<Venues />}></Route>
  </Routes>
  </div>
  <Footer/>
  </BrowserRouter>

    </>
  )
}

export default App;
