import { AuthContext } from '@/context/auth.context';
import { useContext } from 'react';
import { useState } from 'react';
import { getUserBookings } from '@/api/services.api';
import { deleteBooking } from '@/api/services.api';
import { message } from 'antd';
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

  const handleDeleteBooking = async (userId, bookingId) => {
    try {
      await deleteBooking(userId, bookingId);
      message.success('Booking deleted successfully');
      //? how to update state to remove the deleted booking from the UI
    } catch (error) {
      console.log(error);
      message.error('Failed to delete booking');
    }
  };

  useEffect(() => {
    getBookings();
  }, []);
  return (
    <div>
      <h1>Bookings</h1>
      {bookings &&
        bookings.map(booking => (
          <div key={booking._id}>
            <p>Date: {booking.date}</p>
            <p>Time: {booking.time}</p>
            <button onClick={() => handleDeleteBooking(user._id, booking._id)}>
              Delete Booking
            </button>
          </div>
        ))}
    </div>
  );
}

export default Bookings;
