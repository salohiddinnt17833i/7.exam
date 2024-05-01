import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import headphones from '../assets/home/headphones.png'
import speakers from '../assets/home/zx9speaker.svg'
import yx1earphone from '../assets/home/earphones.png'
import person from '../assets/home/person.png'
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

      <div className='w-full bg-white'>
        <div className='w-[1110px] py-32 m-auto flex items-center justify-between gap-3'>
          <div className='Card-block'>
            <figure className='w-32 m-auto absolute z-20 mx-28 mt-[-70px]'>
              <img style={{

              }} src={headphones} alt="Shoes" className="w-[121px] rounded-xl " />
            </figure>
            <div className="card w-[350px] bg-[#F1F1F1] h-[200px] shadow-xl">

              <div className="card-body items-center text-center mt-20">
                <h2 className="card-title text-black uppercase font-[18px]">HEADPHONES</h2>
                <div className="card-atctions">
                  <Link to={'headphones/xx99-mark-one-headphones'} className="font-bold flex items-center gap-2 hover:text-orange-600"><span>SHOP</span> <span className='text-orange-600'>></span></Link>
                </div>
              </div>
            </div>
          </div>
          <div className='Card-block'>
            <figure className='w-32 m-auto absolute z-20 mx-28 mt-[-70px]'>
              <img style={{

              }} src={speakers} alt="Shoes" className="w-[121px] rounded-xl " />
            </figure>
            <div className="card w-[350px] bg-[#F1F1F1] h-[200px] shadow-xl">

              <div className="card-body items-center text-center mt-20">
                <h2 className="card-title text-black uppercase font-[18px]">SPEAKERS</h2>
                <div className="card-atctions">
                  <Link to={'speakers/zx9-speaker'} className="font-bold flex items-center gap-2 hover:text-orange-600"><span>SHOP</span> <span className='text-orange-600'>></span></Link>
                </div>
              </div>
            </div>
          </div>
          <div className='Card-block'>
            <figure className='w-32 m-auto absolute z-20 mx-28 mt-[-70px]'>
              <img style={{

              }} src={yx1earphone} alt="Shoes" className="w-[121px] rounded-xl " />
            </figure>
            <div className="card w-[350px] bg-[#F1F1F1] h-[200px] shadow-xl">

              <div className="card-body items-center text-center mt-20">
                <h2 className="card-title text-black uppercase font-[18px]">EARPHONES</h2>
                <div className="card-atctions">
                  <Link to={'/earphones/yx1-earphones'} className="font-bold flex items-center gap-2 hover:text-orange-600"><span>SHOP</span> <span className='text-orange-600'>></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white py-12'>
        <div className='w-[1110px] m-auto flex justify-between items-center pb-32'>
          <div>
            <h2 className='uppercase text-[44px] text-black font-bold flex flex-col'><span>Bringing you the</span> <span><span className='text-[#D87D4A]'>best</span> audio gear</span></h2>
            <p className='w-[450px] pt-6'>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
          </div>
          <div>
            <img src={person} alt="" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default HedphonesDetailes;
