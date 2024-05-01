import React from 'react'
import { Link } from 'react-router-dom'

import headphones from '../assets/home/headphones.png'
import speakers from '../assets/home/zx9-speaker.png'


function Card() {
    return (
        <div>
            <div className="card w-[350px] bg-base-100 shadow-xl">
                <figure>
                    <img src={headphones} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shoes!</h2>
                    <div className="card-atctions">
                        <Link className="">SHOP <span>></span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card