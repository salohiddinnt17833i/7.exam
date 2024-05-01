import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Speakers() {



  return (
    <div className='w-full h-screen bg-[#131313]'>

      <div className='w-[1110px] m-auto'>
        <header className='flex items-center'>
          <div>
            <span>NEW PRODUCT</span>
            <h1>XX99 Mark II <br />
              Headphones</h1>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <button>SEE PRODUCT</button>
            <Link to={':zx9speaker'}>SEE PRODUCTS</Link>
          </div>
          <div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Speakers