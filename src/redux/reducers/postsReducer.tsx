import { ACTIONS } from '../actions/constants';

export interface IPostState {
  image: string;
  title: string;
  text: string;
  date: string;
  id: string;
}
export interface IPostsState {
  posts: IPostState[];
  post: IPostState;
}

const defaultState: IPostsState = {
  posts: [],
  post: { image: '', title: '', text: '', date: '', id: '' },
};

export const postsReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.ADD_POSTS) {
    return { ...state, posts: state.posts.concat(action.posts) };
  }

  if (action.type === ACTIONS.SELECTED_POST) {
    return { ...state, post: action.post };
  }

  if (action.type === ACTIONS.DELETE_POST) {
    return {
      ...state,
      post: defaultState.post,
    };
  }

  return state;
};
