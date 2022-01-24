import { GET_EPISODES_BY_ID } from '../actions';

const initialState = {
  episode: null,
};

export const episodeReducer = (state = initialState, action) => {
  const { type, episode } = action;

  switch (type) {
    case GET_EPISODES_BY_ID:
      return {
        episode: episode
      };
    default:
      return state;
  }
};