import React from 'react'
import Card from './Card'
import image from '../images/download.jpeg'

const Result = (props) => {
  if (props.fetchedData !== null) {
    console.log(props.fetchedData);
    return (
      <div className='container max-h-[70vh] border-2 mt-6 text-5xl overflow-x-scroll scroll-hidden w-[75vw] m-auto'>
        {props.fetchedData.forEach((data) => (
          console.log(data),
          <Card arr={data} />
        ))}
        
      </div>
    );
  } else {
    return (
      <div className='container max-h-[70vh] border-2 mt-6 text-5xl overflow-x-scroll scroll-hidden w-[75vw] m-auto'>
          <img src={image} alt="hello" />
          hello
      </div>
    );
  }
}

export default Result 