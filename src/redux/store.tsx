import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducerAllPosts, IAllPostsState } from './reducers/reducerAllPosts';
import { reducerPosts, IPostsState } from './reducers/reducerPosts';

export interface IState {
  reducerAllPosts: IAllPostsState;
  reducerPosts: IPostsState;
}

export const store = createStore(
  combineReducers({ reducerAllPosts, reducerPosts }),
  composeWithDevTools()
);
