import React from 'react'

const Card =(props) =>{
    const {img,titulo, description, link,} = props;
  return (
    <div className="bg-blue-300 p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-200">
              <img
                src={img}
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full "
              />
              <h3 className='text-2xl'>{titulo  }</h3>
              <p className="text-xl">{description}</p>
              <a href="https://www.youtube.com/watch?v=nXpB1rixnPQ">{link} Ver curso</a>
    
            </div>
  )
}

export default Card