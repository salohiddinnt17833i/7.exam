
import { useContext, useEffect, useState } from 'react'
import { isLoggedContext, loggedUserName } from '../App'
import headerBgS from '../assets/home/Bitmap.svg';
import { Link } from 'react-router-dom';




import headphones from '../assets/home/headphones.png'
import speakers from '../assets/home/zx9speaker.svg'
import yx1earphone from '../assets/home/earphones.png'
import person from '../assets/home/person.png'
import xx99headphones1 from '../assets/headphones/xx99-headphones1.png'
import xx99headphones2 from '../assets/headphones/xx99-headphones2.png'
import xx59headphones from '../assets/headphones/xx59-headphones.png'

function Headphones() {



  const [headphonesTwo, setHeadphonesTwo] = useState([]);
  const [headphonesOne, setHeadphonesOne] = useState([]);
  const [xx59headphoness, setXx59headphonese] = useState([]);
  const [zx9speker, setZx9speker] = useState([]);
  const [zx7speker, setZx7speker] = useState([]);
  const [yx1ear, setYx1ear] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/xx99-mark-two-headphones`)
      .then(res => res.json())
      .then(data => {
        setHeadphonesTwo(data);
      });

    fetch(`http://localhost:3000/xx99-mark-one-headphones`)
      .then(res => res.json())
      .then(data => {
        setHeadphonesOne(data)
      });

    fetch(` http://localhost:3000/xx59-headphones`)
      .then(res => res.json())
      .then(data => {
        setXx59headphonese(data)
      });



    fetch(`http://localhost:3000/zx9-speaker`)
      .then(res => res.json())
      .then(data => {
        setZx9speker(data);
      });

    fetch(`http://localhost:3000/zx7-speaker`)
      .then(res => res.json())
      .then(data => {
        setZx7speker(data);
      });
    fetch(`http://localhost:3000/yx1-earphones`)
      .then(res => res.json())
      .then(data => {
        setYx1ear(data);
      });
  }, []);


  return (

    <div>
      <div className='w-full h-[250px] bg-[#131313] text-center p-20'>
        <h1 className='text-[40px] text-white'>HEADPHONES</h1>
      </div>

      <div className='w-full bg-white'>
        <div className='w-[1110px] m-auto pt-32 flex items-center justify-between'>
          <div className='w-[540px] h-[560px bg-[#F1F1F1] flex justify-center rounded-lg p-20'>
            <img className='w-[350px] h-[386px]' width={350} height={386} src={xx99headphones1} alt="" />
          </div>
          <div>
            <div>
              <span style={{ letterSpacing: "10px" }} className='text-orange-400'>NEW PRODUCT</span>
              <h1 style={{
                lineHeight: "56px",
                letterSpacing: "2px"
              }}
                className='text-6xl w-[390px] text-black font-semibold pt-4 pb-10'
              >{headphonesTwo?.name}</h1>
              <p style={{
                lineHeight: "25px",
              }} className='mb-10 w-[360px]'>{headphonesTwo?.description}</p>
              <Link to={'/headphones/xx99-mark-two-headphones'} className='py-3 px-6 border-none text-white bg-orange-400 hover:bg-orange-300'>SEE PRODUCT</Link>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='w-[1110px] m-auto pt-32 flex items-center'>
          <div>
            <div>
              <span style={{ letterSpacing: "10px" }} className='text-orange-400'>NEW PRODUCT</span>
              <h1 style={{
                lineHeight: "56px",
                letterSpacing: "2px"
              }}
                className='text-6xl text-black font-semibold pt-4 pb-10'
              >{headphonesOne?.name}</h1>
              <p style={{
                lineHeight: "25px",
              }} className='mb-10 w-[340px]'>{headphonesOne?.description}</p>
              <Link to={'/headphones/xx99-mark-one-headphones'} className='py-3 px-6 border-none text-white bg-orange-400 hover:bg-orange-300'>SEE PRODUCT</Link>
            </div>
          </div>
          <div className='w-[540px] h-[560px bg-[#F1F1F1] flex justify-center rounded-lg p-20'>
            <img className='w-[350px] h-[386px]' width={350} height={386} src={xx99headphones2} alt="" />
          </div>

        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='w-[1110px] m-auto pt-32 flex items-center justify-between'>
          <div className='w-[540px] h-[560px bg-[#F1F1F1] flex justify-center rounded-lg p-20'>
            <img className='w-[350px] h-[386px]' width={350} height={386} src={xx59headphones} alt="" />
          </div>
          <div>
            <div>
              <span style={{ letterSpacing: "10px" }} className='text-orange-400'>NEW PRODUCT</span>
              <h1 style={{
                lineHeight: "56px",
                letterSpacing: "2px"
              }}
                className='text-6xl w-[390px] text-black font-semibold pt-4 pb-10'
              >{xx59headphoness?.name}</h1>
              <p style={{
                lineHeight: "25px",
              }} className='mb-10 w-[360px]'>{xx59headphoness?.description}</p>
              <Link to={'/headphones/xx59-headphones'} className='py-3 px-6 border-none text-white bg-orange-400 hover:bg-orange-300'>SEE PRODUCT</Link>
            </div>
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
                  <Link to={'xx99-mark-one-headphones'} className="font-bold flex items-center gap-2 hover:text-orange-600"><span>SHOP</span> <span className='text-orange-600'>></span></Link>
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
  )
}

export default Headphones