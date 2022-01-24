import axios from 'axios';
import qs from 'qs';

export const GET_EPISODES = 'GET_EPISODES';
export const GET_EPISODES_BY_ID = 'GET_EPISODES_BY_ID';

export const getEpisodes = async() => {
  const params = qs.stringify({
    q: 'Powerpuff Girls 2016',
    embed: 'episodes',
  });
  const payload = await axios.get(
    `https://api.tvmaze.com/singlesearch/shows?${params}`,
  );
  
  return {
    type: GET_EPISODES,
    episodes: {
      show: payload.data,
      allEpisodes: payload.data._embedded.episodes,
    }
  }  
};

export const getEpisodeById = async(season: string, number: string) => {
  const payload = await axios.get(
    `https://api.tvmaze.com/shows/6771/episodebynumber?season=${season}&number=${number}`,
  );

  return {
    type: GET_EPISODES_BY_ID,
    episode: payload.data
  }
};