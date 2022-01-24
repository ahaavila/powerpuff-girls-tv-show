import { GET_EPISODES } from '../actions';

const initialState = {
  episodes: null
};

export const episodesReducer = (state = initialState, action) => {
  const { type, episodes } = action;

  switch (type) {
    case GET_EPISODES:
      return {
        ...state,
        episodes: episodes
      };
    default:
      return state;
  }
};