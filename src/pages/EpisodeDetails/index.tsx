import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Header } from '../../components/Header';
import { EpisodeInfo } from '../../components/EpisodeInfo';
import { Spinner } from '../../components/Spinner';

import { ImageProps } from '../../components/EpisodeCard';
import { RatingProps } from '../../components/EpisodeInfo';

import { EpisodeContainer, EpisodeSection } from './styles';

export interface Episode {
  name: string;
  image: ImageProps;
  summary: string;
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  runtime: number;
  rating: RatingProps;
}

export const EpisodeDetails = () => {
  const { season, number } = useParams();

  const [episode, setEpisode] = useState<Episode>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getEpisode();
  }, []);

  const getEpisode = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.tvmaze.com/shows/6771/episodebynumber?season=${season}&number=${number}`,
      );
      console.log(response);
      setEpisode(response.data);
    } catch (err) {
      console.error(err.mesage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <EpisodeContainer>
      <EpisodeSection>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Header
              name={episode?.name}
              image={episode?.image}
              summary={episode?.summary}
            />
            <EpisodeInfo
              season={episode?.season}
              number={episode?.number}
              airdate={episode?.airdate}
              airtime={episode?.airtime}
              runtime={episode?.runtime}
              rating={episode?.rating}
            />
          </>
        )}
      </EpisodeSection>
    </EpisodeContainer>
  );
};
