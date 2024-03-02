import { Link } from 'react-router-dom';
import { getAllServices } from '../api/services.api';
import { useState, useEffect } from 'react';

function ServiceList() {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await getAllServices();
      setServices(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className='ServiceList'>
      <h1>All Services</h1>

      {services.map(service => {
        return (
          <div key={service._id} className='ServiceCard card'>
            <Link to={`/services/${service._id}`}>
              <h3>{service.serviceName}</h3>
              {service.imgURL && (
                <img
                  src={service.imgURL}
                  width={100}
                  alt={service.serviceName}
                />
              )}
              <p>{service.address}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ServiceList;
