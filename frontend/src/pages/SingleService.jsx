import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addServiceId } from '../api/services.api';

function SingleService() {
  const { serviceId } = useParams();
  const [service, setService] = useState();

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await addServiceId(serviceId);
        setService(response.data);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchService();
  }, [serviceId]);

  return (
    <div>
      <h2>{service.name}</h2>
      <h2>{service.description}</h2>
      <h2>{service.company.adress}</h2>
    </div>
  );
}

export default SingleService;
