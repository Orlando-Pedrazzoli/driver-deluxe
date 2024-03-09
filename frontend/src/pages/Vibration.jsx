import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getService } from '@/api/services.api';

function Vibration() {
  const [services, setServices] = useState();
  /* 
  const { serviceType } = useLocation(); */

  const getServices = async () => {
    try {
      const response = await getService('vibration');
      console.log(response);
      console.log(response.data);
      setServices(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <>
      {services &&
        services.map(service => (
          <div key={service._id}>
            <h2>{service.type}</h2>
            <img src={service.imgURL} alt={service.type} />
            <p>{service.description}</p>
            <p>Price: {service.price}</p>
            <p>Duration: {service.duration}</p>
            <p>Company: {service.company.name}</p>
            <p>Address: {service.company.address}</p>
            <p>Contact: {service.company.contact}</p>
            <p>Website: {service.company.website}</p>
          </div>
        ))}
    </>
  );
}

export default Vibration;
