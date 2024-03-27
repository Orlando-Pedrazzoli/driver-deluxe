import Login from './pages/Login';
import Signup from './pages/Signup';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import Massages from './pages/Massages';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Vibration from './pages/Massages/Vibration';
import Shiatsu from './pages/Massages/Shiatsu';
import ChairMassage from './pages/Massages/ChairMassage';
import Reflexology from './pages/Massages/Reflexology';
import SingleService from './pages/SingleService';
import Bookings from './pages/Bookings';
import IsAnon from './components/IsAnon';
import IsPrivate from './components/IsPrivate';
import MapsComponent from './components/MapsComponent';
import TourPage from './pages/TourPage';
import Boschcar from './pages/MaintenaceCar/Boschcar';
import Norauto from './pages/MaintenaceCar/Norauto';
import Euromaster from './pages/MaintenaceCar/Euromaster';
import Mforce from './pages/MaintenaceCar/Mforce';
import Breadcrumb from './components/Breadcrumb';
import AllServices from './pages/AllServices';
import LisbonTour from './pages/Tours/LisbonTour';
import SintraTour from './pages/Tours/SintraTour';
import PortoTour from './pages/Tours/PortoTour';
import AlgarveTour from './pages/Tours/AlgarveTour';
import CarService from './pages/CarService';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/bookings'
          element={
            <IsPrivate>
              <Bookings MapsComponent={MapsComponent} Breadcrumb={Breadcrumb} />
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
          path='/lisbontour'
          element={
            <IsPrivate>
              <LisbonTour />
            </IsPrivate>
          }
        />
        <Route
          path='/sintratour'
          element={
            <IsPrivate>
              <SintraTour />
            </IsPrivate>
          }
        />
        <Route
          path='/portotour'
          element={
            <IsPrivate>
              <PortoTour />
            </IsPrivate>
          }
        />
        <Route
          path='/algarvetour'
          element={
            <IsPrivate>
              <AlgarveTour />
            </IsPrivate>
          }
        />
        <Route
          path='/allservices'
          element={
            <IsPrivate>
              <AllServices />
            </IsPrivate>
          }
        />
        <Route
          path='/massages'
          element={
            <IsPrivate>
              <Massages />
            </IsPrivate>
          }
        />
        <Route
          path='/tourpage'
          element={
            <IsPrivate>
              <TourPage MapsComponent={MapsComponent} />
            </IsPrivate>
          }
        />
        <Route
          path='/carservice'
          element={
            <IsPrivate>
              <CarService MapsComponent={MapsComponent} />
            </IsPrivate>
          }
        />
        <Route
          path='/services/oneItem/:itemId'
          element={
            <IsPrivate>
              <SingleService
                MapsComponent={MapsComponent}
                Breadcrumb={<Breadcrumb prevPath='/allservices' />}
              />
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
              <Vibration MapsComponent={MapsComponent} />
            </IsPrivate>
          }
        />
        <Route
          path='/reflexology'
          element={
            <IsPrivate>
              <Reflexology MapsComponent={MapsComponent} />
            </IsPrivate>
          }
        />
        <Route
          path='/chairmassage'
          element={
            <IsPrivate>
              <ChairMassage MapsComponent={MapsComponent} />
            </IsPrivate>
          }
        />
        <Route
          path='/shiatsu'
          element={
            <IsPrivate>
              <Shiatsu MapsComponent={MapsComponent} />
            </IsPrivate>
          }
        />
        <Route
          path='/boschcarservice'
          element={
            <IsPrivate>
              <Boschcar MapsComponent={MapsComponent} />
            </IsPrivate>
          }
        />
        <Route
          path='/norauto'
          element={
            <IsPrivate>
              <Norauto MapsComponent={MapsComponent} />
            </IsPrivate>
          }
        />
        <Route
          path='/euromaster'
          element={
            <IsPrivate>
              <Euromaster MapsComponent={MapsComponent} />
            </IsPrivate>
          }
        />
        <Route
          path='/mforce'
          element={
            <IsPrivate>
              <Mforce MapsComponent={MapsComponent} />
            </IsPrivate>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
