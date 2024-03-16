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
      console.log(response.data);
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteBooking = async (userId, bookingId) => {
    try {
      await deleteBooking(userId, bookingId);

      message.success('Booking deleted successfully');
      setBookings(prevBookings =>
        prevBookings.filter(booking => booking._id !== bookingId)
      );
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
      <h2 className='text-xl font-semibold'>Your Bookings</h2>
      {bookings &&
        bookings.map(booking => (
          <div key={booking._id}>
            <div className='flex flex-col max-w-3xl p-0 space-y-4 sm:p-2 dark:bg-gray-900 dark:text-gray-100'>
              <ul className='flex flex-col divide-y dark:divide-gray-700'>
                <li className='flex flex-col py-0 sm:flex-row sm:justify-between'>
                  <div className='flex w-full space-x-2 sm:space-x-4'>
                    <img
                      src={booking.massage.imgURL}
                      alt={booking.massage.type}
                      style={{ width: '180px', height: '120px' }}
                    />
                    <div className='flex flex-col justify-between w-full pb-4'>
                      <div className='flex justify-between w-full pb-2 space-x-2'>
                        <div className='space-y-1'>
                          <h3 className='text-lg font-semibold leading-snug sm:pr-8'>
                            {booking.massage.type}
                          </h3>
                          <p className='text-sm dark:text-gray-400'>
                            Address: {booking.massage.company.address}
                          </p>
                          <p className='text-sm dark:text-gray-400'>
                            Date: {booking.date}
                          </p>
                          <p className='text-sm dark:text-gray-400'>
                            Time: {booking.time}
                          </p>
                        </div>
                        <div className='text-right'>
                          <p className='text-lg font-semibold'>
                            {booking.massage.price}€
                          </p>
                          <p className='text-sm line-through dark:text-gray-600'>
                            40.00€
                          </p>
                        </div>
                      </div>
                      <div className='flex text-sm divide-x'>
                        <button
                          onClick={() =>
                            handleDeleteBooking(user._id, booking._id)
                          }
                          type='button'
                          className='flex items-center px-2 py-1 pl-0 space-x-1'
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 512 512'
                            className='w-4 h-4 fill-current'
                          >
                            <path d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z'></path>
                            <rect
                              width='32'
                              height='200'
                              x='168'
                              y='216'
                            ></rect>
                            <rect
                              width='32'
                              height='200'
                              x='240'
                              y='216'
                            ></rect>
                            <rect
                              width='32'
                              height='200'
                              x='312'
                              y='216'
                            ></rect>
                            <path d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z'></path>
                          </svg>
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Bookings;
