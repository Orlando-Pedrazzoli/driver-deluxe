import Login from './pages/Login';
import Signup from './pages/Signup';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import BookNow from './pages/BookNow';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route
          path='/services'
          element={
            <IsPrivate>
              <Services />
            </IsPrivate>
          }
        />
        <Route
          path='/booknow'
          element={
            <IsPrivate>
              <BookNow />
            </IsPrivate>
          }
        />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/login'
          element={
            <IsAnon>
              <Login />
            </IsAnon>
          }
        />
      </Routes>
    </>
  );
}

export default App;
