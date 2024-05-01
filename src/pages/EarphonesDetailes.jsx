import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function EarphonesDetailes() {
  const params = useParams();
  const [headphonesTwo, setHeadphonesTwo] = useState({}); 

  useEffect(() => {
    let paramsID = params.id;
    console.log(paramsID);
    fetch(`http://localhost:3000/${paramsID}`)
      .then(res => res.json())
      .then(data => {
        setHeadphonesTwo(data);
        console.log(data);
      });
  }, []); 

  return (
    <div>EarphonesDetailes</div>
  )
}

export default EarphonesDetailes