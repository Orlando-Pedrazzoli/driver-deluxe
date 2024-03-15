import Login from './pages/Login';
import Signup from './pages/Signup';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Vibration from './pages/Vibration';
import Shiatsu from './pages/Shiatsu';
import ChairMassage from './pages/ChairMassage';
import Reflexology from './pages/Reflexology';
import SingleService from './pages/SingleService';
import Bookings from './pages/Bookings';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/services' element={<Services />} />
        <Route path='/services/oneItem/:itemId' element={<SingleService />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/vibration' element={<Vibration />} />
        <Route path='/reflexology' element={<Reflexology />} />
        <Route path='/chairmassage' element={<ChairMassage />} />
        <Route path='/shiatsu' element={<Shiatsu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
