import { ACTIONS } from '../../redux/actions/constants';
import { IPostsState, IPostState } from '../reducers/postsReducer';
import { Dispatch } from 'redux';

export const addPosts = (value: IPostsState) => {
  return { type: ACTIONS.ADD_POSTS, posts: value };
};

export function fetchPosts(LIMIT: number, offset: number) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?format=json&limit=${LIMIT}&offset=${offset}`
    );
    const result = await response.json();
    // const count = await result.count;
    dispatch(addPosts(result.results));
  };
}

export const getSelectedPost = (value: IPostState) => {
  return { type: ACTIONS.SELECTED_POST, post: value };
};

export function fetchPost(id: string) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      'https://studapi.teachmeskills.by/blog/posts/' + id
    );
    const data = await response.json();
    dispatch(getSelectedPost(data));
  };
}

export const deletePost = () => {
  return { type: ACTIONS.DELETE_POST };
};

export const searchPosts = (search: string) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?search=${search}&limit=100`
    );
    const data = await response.json();
    dispatch(addPosts(data.results));
  };
};
