import { AuthContext } from '@/context/auth.context';
import { useContext } from 'react';
import { useState } from 'react';
import { getUserBookings } from '@/api/services.api';
import { useEffect } from 'react';

function Bookings() {
  const { user } = useContext(AuthContext);

  const [bookings, setBookings] = useState(null);

  const getBookings = async () => {
    try {
      const response = await getUserBookings(user._id);
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookings();
  }, []);
  return (
    <div>
      <h1>Bookings</h1>
      {bookings.map(booking => (
        <div key={booking._id}>
          <p>Date: {booking.date}</p>
          <p>Time: {booking.time}</p>
        </div>
      ))}
    </div>
  );
}

export default Bookings;
