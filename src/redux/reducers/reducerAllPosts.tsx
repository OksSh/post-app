import { IPostProps } from '../../components/PostCard/PostCard';
import { ACTIONS } from '../actions/constants';

export interface IAllPostsState {
  allPosts: IPostProps[];
}

const defaultState: IAllPostsState = {
  allPosts: [],
};

export const reducerAllPosts = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.ADD_ALL_POSTS) {
    return { ...state, allPosts: action.allPosts };
  }

  return state;
};
