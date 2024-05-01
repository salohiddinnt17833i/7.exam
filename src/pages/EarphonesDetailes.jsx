import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function EarphonesDetailes() {
  const params = useParams()

  useEffect(()=> {  
    console.log(params);
  })

  return (
    <div>EarphonesDetailes</div>
  )
}

export default EarphonesDetailes