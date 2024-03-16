import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMassage } from '@/api/services.api';
import { useContext } from 'react';
import { DatePicker } from 'antd';
import { TimePicker } from 'antd';
import { message } from 'antd';
import { AuthContext } from '@/context/auth.context';
import { addBooking } from '@/api/services.api';
import dayjs from 'dayjs';

function ProductPage() {
  const [service, setService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const format = 'HH:mm';

  const { itemId } = useParams();

  const getSingleService = async () => {
    try {
      const response = await getMassage(itemId);
      console.log(itemId);
      console.log(response.data);
      setService(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDateChange = (date, dateString) => {
    console.log(date, dateString);
    setSelectedDate(dateString);
  };

  const handleTimeChange = (time, timeString) => {
    console.log(time, timeString);
    setSelectedTime(timeString);
  };

  const handleBookNow = async () => {
    try {
      await addBooking(user._id, service._id, selectedDate, selectedTime);
      message.success('Booking created successfully'); // Show success message
      navigate('/bookings');
    } catch (error) {
      console.log(error);
      message.error('Failed to create booking'); // Show error message
    }
  };

  useEffect(() => {
    getSingleService();
  }, []);

  return (
    <>
      <div>
        {service && (
          <>
            <section>
              <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
                <div className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 mt-4'>
                  <div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full'>
                    <img
                      alt=''
                      src={service.imgURL}
                      className='absolute inset-0 h-full w-full object-cover'
                    />
                  </div>

                  <div className='lg:py-24'>
                    <h2 className='text-3xl font-bold sm:text-4xl mb-4'>
                      {service.type}
                    </h2>
                    <DatePicker onChange={handleDateChange} />
                    <TimePicker
                      className='m-4'
                      onChange={handleTimeChange}
                      defaultValue={dayjs('12:00', format)}
                      format={format}
                    />
                    <h1 className='text-gray-800'>{service.company.name}</h1>
                    <p>{service.company.address}</p>
                    <p>Tel: {service.company.contact}</p>
                    <p className='mt-4 text-gray-600'>
                      {service.company.website}
                    </p>
                    <p className='mt-4 text-gray-600'>{service.description}</p>

                    <button
                      onClick={handleBookNow}
                      className='mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400'
                    >
                      Book now
                    </button>
                    <Link to={`/${service.type}`}>
                      <button className='mt-8 ml-6 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400'>
                        Go Back
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
}

export default ProductPage;
