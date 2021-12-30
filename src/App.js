import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router';
import Notfound from './Components/Notfound/Notfound';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='Home' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='portfolio' element={<Portfolio/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='*' element={<Notfound/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
