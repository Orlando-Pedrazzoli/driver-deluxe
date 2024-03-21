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
import MapsComponent from './components/MapsComponent';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/bookings'
          element={
            <IsPrivate>
              <Bookings MapsComponent={MapsComponent} />
            </IsPrivate>
          }
        />
        <Route
          path='/'
          element={
            <IsPrivate>
              <Home />
            </IsPrivate>
          }
        />
        <Route
          path='/news'
          element={
            <IsPrivate>
              <News />
            </IsPrivate>
          }
        />
        <Route
          path='/services'
          element={
            <IsPrivate>
              <Services />
            </IsPrivate>
          }
        />
        <Route
          path='/services/oneItem/:itemId'
          element={
            <IsPrivate>
              <SingleService />
            </IsPrivate>
          }
        />
        <Route
          path='/contact-us'
          element={
            <IsPrivate>
              <ContactUs />
            </IsPrivate>
          }
        />
        <Route
          path='/signup'
          element={
            <IsAnon>
              <Signup />
            </IsAnon>
          }
        />
        <Route
          path='/login'
          element={
            <IsAnon>
              <Login />
            </IsAnon>
          }
        />
        <Route
          path='/vibration'
          element={
            <IsPrivate>
              <Vibration />
            </IsPrivate>
          }
        />
        <Route
          path='/reflexology'
          element={
            <IsPrivate>
              <Reflexology />
            </IsPrivate>
          }
        />
        <Route
          path='/chairmassage'
          element={
            <IsPrivate>
              <ChairMassage />
            </IsPrivate>
          }
        />
        <Route
          path='/shiatsu'
          element={
            <IsPrivate>
              <Shiatsu />
            </IsPrivate>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
