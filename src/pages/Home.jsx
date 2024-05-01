
import { useContext, useEffect, useState } from 'react'
import { isLoggedContext, loggedUserName } from '../App'
import headerBgS from '../assets/home/Bitmap.svg';
import { Link } from 'react-router-dom';




import headphones from '../assets/home/headphones.png'
import speakers from '../assets/home/zx9speaker.svg'
import oval from '../assets/home/oval.png'
import zx99speker from '../assets/home/zx9speaker.svg'
import zx7spekerP from '../assets/home/zx7-speaker.png'
import yx1earphones from '../assets/home/yx1-earphones.png'
import person from '../assets/home/person.png'
import Footer from '../Components/Footer';

function Home() {
  const [loggedUser, setLoggedUser] = useContext(loggedUserName)
  const [isLoggedIn, setIsLoggedIn] = useContext(isLoggedContext);



  const [headphonesTwo, setHeadphonesTwo] = useState([]);
  const [zx9speker, setZx9speker] = useState([]);
  const [zx7speker, setZx7speker] = useState([]);
  const [yx1ear, setYx1ear] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/xx99-mark-two-headphones`)
      .then(res => res.json())
      .then(data => {
        setHeadphonesTwo(data);
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
      <div className='w-full h-[729px] bg-[#131313]'>
        <div className='w-[1110px] m-auto'>
          <header className='flex items-center justify-between'>
            <div>
              <span style={{ letterSpacing: "10px" }}>NEW PRODUCT</span>
              <h1 style={{
                lineHeight: "56px",
                letterSpacing: "2px"
              }} className='text-6xl text-white my-6 font-semibold'>{headphonesTwo?.name}</h1>
              <p style={{
                lineHeight: "25px",
              }} className='mb-10 w-[360px]'>{headphonesTwo?.description}</p>
              <Link to={'/headphones/xx99-mark-two-headphones'} className='btn py-3 px-6 text-white bg-orange-400'>SEE PRODUCT</Link>
            </div>
            <div className='mt-0'>
              <img width={708} height={886} src={headerBgS} alt="" />
            </div>
          </header>
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

      <div className='w-full bg-white'>
        <div style={{
          backgroundColor: '#D87D4A',
          backgroundImage: `url(${oval})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='w-[1110px] h-[560px] m-auto rounded-lg flex gap-24 items-center justify-center'>
          <div style={{
            height: "100%",
            marginBottom: "-194px"
          }}>
            <img width={410} src={zx99speker} alt="" />
          </div>
          <div className='w-[350px]'>
            <h2 className='text-[56px] text-white flex flex-col uppercase'><span>{zx9speker?.name}</span></h2>
            <p className='text-zinc-300 mb-10'>{zx9speker?.description}</p>
            <Link to={'speakers/zx9-speaker'} className='w-[160px] bg-black py-3 px-6 text-white'>SEE PRODUCTS</Link>
          </div>
        </div>
      </div>

      <div className='w-full bg-white pt-20'>
        <div className='w-[1110px] h-[320px] m-auto rounded-lg' style={{
          backgroundImage: `url(${zx7spekerP})`
        }}>
          <div className='pt-20 pl-28'>
            <h2 className='text-black text-[28px] font-bold pb-6 uppercase'>{zx7speker?.name}</h2>
            <Link to={'/speakers/zx7-speaker'} className='btn px-10 bg-transparent rounded-none text-black hover:text-white'>SEE PRODUCT</Link>
          </div>
        </div>
      </div>

      <div className='w-full bg-white py-12'>
        <div className='w-[1110px] m-auto flex gap-8'>
          <div className='w-[540px]'>
            <img className='rounded-lg' src={yx1earphones} alt="" />
          </div>
          <div className='w-[540px] h-[320px] bg-[#F1F1F1] rounded-lg p-24'>
            <h2 className='text-[28px] text-black font-bold uppercase'>{yx1ear?.name}</h2>
            <Link to={'/speakers/yx1-earphones'} className='btn bg-transparent mt-4 px-10 rounded-none text-black hover:text-white'>SEE PRODUCT</Link>
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

export default Home
