import { ACTIONS } from '../../redux/actions/constants';
import { IAllPostsState } from '../reducers/reducerAllPosts';
import { IPostsState } from '../reducers/reducerPosts';

export const addAllPosts = (value: IAllPostsState) => {
  return { type: ACTIONS.ADD_ALL_POSTS, allPosts: value };
};

export const getPosts = (value: IPostsState) => {
  return { type: ACTIONS.GET_POSTS, posts: value };
};
