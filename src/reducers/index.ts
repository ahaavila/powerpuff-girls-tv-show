import { episodesReducer } from './episodesReducer';
import { episodeReducer } from './episodeReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
  episodesState: episodesReducer,
  episodeState: episodeReducer
});
