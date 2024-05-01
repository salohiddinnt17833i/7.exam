import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function HedphonesDetailes() {
  const params = useParams()

  useEffect(()=> {  
    console.log(params);
  })

  return (
    <div>HedphonesDetailes</div>
  )
}

export default HedphonesDetailes