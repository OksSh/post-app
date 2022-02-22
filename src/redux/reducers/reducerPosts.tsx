import { IPostProps } from '../../components/PostCard/PostCard';
import { ACTIONS } from '../actions/constants';

export interface IPostsState {
  posts: IPostProps[];
}

const defaultState: IPostsState = {
  posts: [],
};

export const reducerPosts = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.GET_POSTS) {
    return { ...state, posts: action.posts };
  }

  return state;
};
