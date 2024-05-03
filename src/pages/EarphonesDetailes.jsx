import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import headphones from '../assets/home/headphones.png'
import speakers from '../assets/home/zx9speaker.svg'
import yx1earphone from '../assets/home/earphones.png'
import person from '../assets/home/person.png'

import one from '../assets/earphones/e1.svg'
import two from '../assets/earphones/e2.svg'
import three from '../assets/earphones/e3.svg'

import headphones3 from '../assets/headphones/xx59-headphones.png'
import zx9speaker from '../assets/earphones/earphones.svg'
import { add } from '../store/storeData';
import { useDispatch } from 'react-redux';



function EarphonesDetailes() {
  const dispatch = useDispatch()
  const notify = () => toast.success('ADD TO CART!')


  const params = useParams();
  const [headphonesTwo, setHeadphonesTwo] = useState({});
  const [num, setNum] = useState(1)

  useEffect(() => {
    let paramsID = params.id;
    fetch(`http://localhost:3000/${paramsID}`)
      .then(res => res.json())
      .then(data => {
        setHeadphonesTwo(data);
      });

  }, [headphonesTwo]);


  function handleSaveCart() {
    const obj = {
      img: 'https://audiophile.dlindegren.com/media/products/yx1-wireless-earphones/desktop/yx1-wireless-earphones.jpg',
      name: headphonesTwo?.name,
      price: headphonesTwo?.price,
      number: num
    }
    dispatch(add(obj))
    notify()
  }


  function handleInc() {
    if (num === 1) {
      setNum(num)
    } else {
      setNum(num - 1)

    }
  }
  function handleDec() {
    setNum(num + 1)
  }

  return (
    <div className='w-full bg-white'>
      <div className='w-[1110px] m-auto py-20'>
        <Link to={'/'}>Go Back</Link>
      </div>

      <div className='w-full bg-white'>
        <div className='w-[1110px] m-auto flex justify-between'>
          <div className='w-[540px] h-[560px] bg-[#F1F1F1] flex justify-center rounded-lg'>
            <img className='w-[350px] h-[386px] my-auto' src={zx9speaker} alt="" />
          </div>
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
            <span className='text-black font-bold'>$ {headphonesTwo?.price}</span>
            <div className='mt-10 flex gap-3'>
              <span className=' rounded-lg w-[120px] flex justify-center text-center text-black'>
                <span onClick={handleInc} className='w-1/3 p-2 cursor-pointer bg-[#F1F1F1]'>-</span>
                <span className='w-1/3 p-2 bg-[#F1F1F1]'>{num}</span>
                <span onClick={handleDec} className='w-1/3 p-2 cursor-pointer bg-[#F1F1F1]'>+</span>
              </span>
              <button onClick={handleSaveCart} className='w-[160px] btn bg-orange-400 text-white border-none rounded-none text-[13px] hover:bg-orange-300'>ADD TO CART</button>
              <Toaster></Toaster>
            </div>
          </div>
        </div>
      </div>

      <div className='w-[full] bg-white'>
        <div className='w-[1110px] m-auto py-32 flex justify-between'>
          <div>
            <h2 className='text-[32px] mb-8 text-black font-bold uppercase'>FEATURES</h2>
            <p className='w-[635px] leading-7'>{headphonesTwo?.features}</p>
          </div>
          <div className='w-[350px]'>
            <h2 className='text-[32px] mb-8 text-black font-bold uppercase'>in the box</h2>
            <div className='flex flex-col gap-2'>
              {headphonesTwo?.includes?.map((ele, inde) => {
                return (
                  <span key={inde} className='flex items-center gap-2'>
                    <span className='text-[15px] text-[#D87D4A] font-bold'>{ele.quantity}x</span>
                    <span className='text-[15px] text-[#000000] font-normal'>{ele.item}</span>
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>


      <div className='w-full bg-white'>
        <div className='w-[1110px] m-auto flex gap-6'>
          <div className='flex flex-col gap-6'>
            <img className='w-[445px] h-[280px] rounded-lg' src={one} alt="" />
            <img className='w-[445px] h-[280px] rounded-lg' src={two} alt="" />
          </div>
          <div>
            <img className='w-[635px] h-[592px] rounded-lg' src={three} alt="" />
          </div>
        </div>
      </div>

      <div className='w-full bg-white'>
        <div className='w-[1110px] py-32 m-auto'>
          <div>
            <h1 className='uppercase text-center text-[32px] font-semibold  mb-10 text-black'>you may also like</h1>
          </div>
          <div className='flex items-center justify-between gap-3'>
            <div className='w-[350px] text-center'>
              <div className='w-[350px] h-[318px] bg-[#F1F1F1] rounded-lg flex justify-center'>
                <img className="w-[150px] h-[193px] my-auto" width={148} height={193} src={headphones} alt="headphones" />
              </div>
              <div className='px-4 mt-10'>
                <h2 className="font-bold uppercase text-[24px] text-black">XX99 MARK I</h2>
                <Link to={'/headphones/xx99-mark-one-headphones'} className="w-[160px] mt-4 btn bg-orange-400 border-none rounded-none text-white">SEE PRODUCT</Link>
              </div>
            </div>

            <div className='w-[350px] text-center'>
              <div className='w-[350px] h-[318px] bg-[#F1F1F1] rounded-lg flex justify-center'>
                <img className="w-[150px] h-[193px] my-auto" width={148} height={193} src={headphones3} alt="headphones" />
              </div>
              <div className='px-4 mt-10'>
                <h2 className="font-bold uppercase text-[24px] text-black">XX59</h2>
                <Link to={'/headphones/xx59-headphones'} className="w-[160px] mt-4 btn bg-orange-400 border-none rounded-none text-white">SEE PRODUCT</Link>
              </div>
            </div>

            <div className='w-[350px] text-center'>
              <div className='w-[350px] h-[318px] bg-[#F1F1F1] rounded-lg flex justify-center'>
                <img className="w-[150px] h-[193px] my-auto" width={148} height={193} src={zx9speaker} alt="headphones" />
              </div>
              <div className='px-4 mt-10'>
                <h2 className="font-bold uppercase text-[24px] text-black">ZX9 SPEAKER</h2>
                <Link to={'/speakers/zx9-speaker'} className="w-[160px] mt-4 btn bg-orange-400 border-none rounded-none text-white">SEE PRODUCT</Link>
              </div>
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

export default EarphonesDetailes