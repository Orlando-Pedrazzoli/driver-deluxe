import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMassage } from '@/api/services.api';
import { useContext } from 'react';
import { DatePicker } from 'antd';
import { TimePicker } from 'antd';
import { AuthContext } from '@/context/auth.context';
import dayjs from 'dayjs';

function ProductPage() {
  const [service, setService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const user = useContext(AuthContext);

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

  useEffect(() => {
    getSingleService();
  }, []);

  return (
    <>
      <div>
        <DatePicker onChange={handleDateChange} />
        <TimePicker
          onChange={handleTimeChange}
          defaultValue={dayjs('12:00', format)}
          format={format}
        />
        {service && (
          <>
            <img src={service.imgURL} alt='' />
            <h1>{service.type}</h1>
            <h1>{service.company.name}</h1>
            <h1>{service.company.address}</h1>
            <h1>{service.company.website}</h1>
            <h1>{service.company.contact}</h1>
            <Link to={`/${service.type}`}>GO BACK</Link>
          </>
        )}
      </div>
    </>
  );
}

export default ProductPage;
