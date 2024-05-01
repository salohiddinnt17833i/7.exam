import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';




import headphones from '../assets/home/headphones.png'
import speakers from '../assets/home/zx9speaker.svg'
import person from '../assets/home/person.png'
import zx9speakersI from '../assets/speakers/zx9-speaker.png'
import zx7speakersI from '../assets/speakers/zx7-speaker.png'


function Speakers() {
  const [zx9speakers, setHeadphonesTwo] = useState([]);
  const [zx7speakers, setHeadphonesOne] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/zx9-speaker`)
      .then(res => res.json())
      .then(data => {
        setHeadphonesTwo(data);
      });

    fetch(`http://localhost:3000/zx7-speaker`)
      .then(res => res.json())
      .then(data => {
        setHeadphonesOne(data)
      });

  }, []);


  return (
    <div>
      <div className='w-full h-[250px] bg-[#131313] text-center p-20'>
        <h1 className='text-[40px] text-white'>SPEAKERS</h1>
      </div>

      <div className='w-full bg-white'>
        <div className='w-[1110px] m-auto pt-32 flex items-center justify-between'>
          <div className='w-[540px] h-[560px bg-[#F1F1F1] flex justify-center rounded-lg p-20'>
            <img className='w-[350px] h-[386px]' width={350} height={386} src={zx9speakersI} alt="" />
          </div>
          <div>
            <div>
              <span style={{ letterSpacing: "10px" }} className='text-orange-400'>NEW PRODUCT</span>
              <h1 style={{
                lineHeight: "56px",
                letterSpacing: "2px"
              }}
                className='text-6xl w-[390px] text-black font-semibold pt-4 pb-10'
              >{zx9speakers?.name}</h1>
              <p style={{
                lineHeight: "25px",
              }} className='mb-10 w-[360px]'>{zx9speakers?.description}</p>
              <Link to={'/speakers/zx9-speaker'} className='py-3 px-6 border-none text-white bg-orange-400 hover:bg-orange-300'>SEE PRODUCT</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='w-[1110px] m-auto pt-32 flex items-center justify-between'>
          <div>
            <div>
              <span style={{ letterSpacing: "10px" }} className='text-orange-400'>NEW PRODUCT</span>
              <h1 style={{
                lineHeight: "56px",
                letterSpacing: "2px"
              }}
                className='text-6xl text-black font-semibold pt-4 pb-10'
              >{zx7speakers?.name}</h1>
              <p style={{
                lineHeight: "25px",
              }} className='mb-10 w-[340px]'>{zx7speakers?.description}</p>
              <Link to={'/speakers/zx7-speaker'} className='py-3 px-6 border-none text-white bg-orange-400 hover:bg-orange-300'>SEE PRODUCT</Link>
            </div>
          </div>
          <div className='w-[540px] h-[560px bg-[#F1F1F1] flex justify-center rounded-lg p-20'>
            <img className='w-[268px] h-[386px]' width={250} height={386} src={zx7speakersI} alt="" />
          </div>
        </div>
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
                  <Link to={'/headphones/xx99-mark-one-headphones'} className="font-bold flex items-center gap-2 hover:text-orange-600"><span>SHOP</span> <span className='text-orange-600'>></span></Link>
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
                  <Link to={'/speakers/zx9-speaker'} className="font-bold flex items-center gap-2 hover:text-orange-600"><span>SHOP</span> <span className='text-orange-600'>></span></Link>
                </div>
              </div>
            </div>
          </div>
          <div className='Card-block'>
            <figure className='w-32 m-auto absolute z-20 mx-28 mt-[-70px]'>
              <img style={{

              }} src={headphones} alt="Shoes" className="w-[121px] rounded-xl " />
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
  )
}

export default Speakers