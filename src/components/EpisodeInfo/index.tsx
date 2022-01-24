import moment from 'moment';

import { EpisodeInfoDiv } from './styles';

export interface RatingProps {
  average: number;
}

export interface EpisodeInfoProps {
  season: number;
  number: number;
  airdate: string;
  airtime: string;
  runtime: number;
  rating: RatingProps;
}

export const EpisodeInfo = ({
  season,
  number,
  airdate,
  airtime,
  runtime,
  rating,
}: EpisodeInfoProps) => (
  <EpisodeInfoDiv>
    <h2>Episode Info</h2>
    <p>
      Number: Season {season}, Episode {number}
    </p>
    <p>Airdate: {moment(`${airdate}T${airtime}`).format('LLLL')}</p>
    <p>Runtime: {runtime} minutes</p>
    <p>Rating: {rating?.average || 'waiting for more votes'}</p>
  </EpisodeInfoDiv>
);
