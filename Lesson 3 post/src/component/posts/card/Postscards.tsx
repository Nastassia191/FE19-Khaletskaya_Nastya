import React from 'react';
import PostsType from '../../../types/PostsType'
import './PostsCards.scss'





type PropsType = {
  data: PostsType
}



const Postscards: React.FC<PropsType> = ({ data }) => {

  let image;
  if (data.image) {
    image = <img src={data.image} alt="" className='image' />
  } else {
    image = <div className='image-placeholder'>

    </div>
  }

  return (
    <div className='post-card-conteiner'>
      {image}
      <div className='title'>
        {data.title}
      </div>
      <div className='text'>
        {data.text}
      </div>
      <div className='date'>
        {data.date}
      </div>
    </div>

  )
}

export default Postscards;