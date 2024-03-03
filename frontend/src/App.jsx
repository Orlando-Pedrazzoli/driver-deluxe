import Login from './pages/Login';
import Signup from './pages/Signup';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BookNow from './pages/BookNow';
import Footer from './components/Footer';
import SingleService from './pages/SingleService';
import Vibration from './pages/Vibration';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/booknow' element={<BookNow />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/vibration' element={<Vibration />} />
        <Route path='/services/:serviceId' element={<SingleService />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
