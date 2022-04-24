import React, { useEffect, useState } from 'react';
import PostsFilterType from '../component/posts/PostsFilterType';
import PostsType from '../types/PostsType';
import useRequest from './useRequest';

const URL = "https://studapi.teachmeskills.by/blog/posts/";

type RresponseType = {
  count: number,
  next?: string,
  previous?: string,
  results: PostsType[]

}

const defValue: RresponseType = {
  count: 0,
  results: []
}

const usePosts = ({ page, limit }: PostsFilterType) => {

  const offset = limit * (page - 1);

  const url = `${URL}?limit=${limit}&offset=${offset}`
  return useRequest<RresponseType>(defValue, url);

}

export default usePosts;