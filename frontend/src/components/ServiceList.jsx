import { Link } from 'react-router-dom';
function ServiceList() {
  return (
    <div>
      <Link to='/vibration'>Vibration</Link>
      <Link to='/reflexology'>Reflexology</Link>
      <Link to='/shiatsu'>Shiatsu</Link>
      <Link to='/chairmassage'>Chair Massage</Link>
    </div>
  );
}

export default ServiceList;
