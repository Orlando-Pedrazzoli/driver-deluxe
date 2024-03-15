import Hero from '../components/Hero';
import Reviews from '../components/Reviews';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Hero />
      <Reviews />
      <Link to='/bookings'>LINK TO BOOKINGS</Link>
    </div>
  );
}

export default Home;
