import React, { useEffect, useState } from 'react';
//import React from 'react';
import Postscards from './card/Postscards';
import PostsType from '../../types/PostsType';
import './Posts.scss';
import { data } from './data'



type PropsType = {}

const URL = "https://studapi.teachmeskills.by/blog/posts/?limit=50&offset=0";


const Posts: React.FC<PropsType> = () => {

  const [posts, setPosts] = useState<PostsType[]>([]);

  // useEffect(() => {
  //   console.log(posts);
  // }, [posts]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        const posts = data.result as PostsType[];
        setPosts(posts);
      })

  }, []);


  // const cards = posts.map((item) => (
  //   <Postscards key={item.id} data={item} />
  // ))

  return (
    <div className='posts-conteiner'>
      {data.map((item) => <Postscards key={item.id} data={item} />)}

    </div>

  )
}

export default Posts;