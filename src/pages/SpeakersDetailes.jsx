import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function SpeakersDetailse() {
  const params = useParams()

  useEffect(() => {
    console.log(params);
  })

  return (
    <div>SpeakersDetailse</div>
  )
}

export default SpeakersDetailse