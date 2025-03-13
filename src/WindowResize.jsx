import React, { useState, useEffect } from 'react'

const WindowResize = () => {


  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      const size = document.body.clientWidth;
      console.log(size);
      setWidth(size);
    };
    window.addEventListener('resize', updateWidth);
    updateWidth();


  });


  return (
    <div>
      <h2>Windows resize component</h2>
      <p>
        <span> the page wigth: { width}</span>
      </p>
    </div>
  )
}

export default WindowResize
