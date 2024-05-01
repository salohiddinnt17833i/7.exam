import { Link } from 'react-router-dom'
import audiophile from '../assets/home/audiophile.png'
import face from '../assets/home/facebook.png'
import twit from '../assets/home/twitter.png'
import ins from '../assets/home/instagram.png'


function Footer() {
    return (
        <div className='w-full bg-[#131313]'>
            <footer className="footer w-[1110px] m-auto py-10 flex flex-col bg-[#131313] text-neutral-content">
                <div className='w-[1110px] flex justify-between'>
                    <div>
                        <img className='cursor-pointer' width={143} height={25} src={audiophile} />
                    </div>
                    <div>
                        <nav className="flex gap-4">
                            <Link className='hover:text-[#D87D4A]' to={'/'}>HOME</Link>
                            <Link className='hover:text-[#D87D4A]' to={'/headphones'}>HEADPHONES</Link>
                            <Link className='hover:text-[#D87D4A]' to={'/speakers'}>SPEAKERS</Link>
                            <Link className='hover:text-[#D87D4A]' to={'/earphones'}>EARPHONES</Link>
                        </nav>
                    </div>
                </div>

                <footer className="footer border-t text-base-content border-base-300">
                    <aside className="items-center grid-flow-col">
                        <p className='w-[500px]'>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    </aside>
                    <nav className="md:place-self-center md:justify-self-end">
                        <div className="grid grid-flow-col gap-4">
                            <img className='cursor-pointer' src={face} alt="" />
                            <img className='cursor-pointer' src={twit} alt="" />
                            <a href="https://www.instagram.com/2oo7_styleuz/"><img className='cursor-pointer' src={ins} alt="" /></a>
                        </div>
                    </nav>
                </footer>

                <aside>
                    <p>Copyright 2021. All Rights Reserved</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer