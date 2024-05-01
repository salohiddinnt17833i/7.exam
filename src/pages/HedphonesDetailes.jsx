import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

function HedphonesDetailes() {
  const params = useParams();
  const location = useLocation()
  const [headphonesTwo, setHeadphonesTwo] = useState({});

  useEffect(() => {
    let paramsID = params.id;
    console.log(location.pathname);
    fetch(`http://localhost:3000/${paramsID}`)
      .then(res => res.json())
      .then(data => {
        setHeadphonesTwo(data);
        console.log(data);
      });
  }, []);

  return (
    <div className='w-full bg-white'>
      <div className='w-[1110px] m-auto py-20'>
        <Link to={'/'}>Go Back</Link>
      </div>
      <div className='w-full bg-white'>

      </div>
    </div>
  );
}

export default HedphonesDetailes;
