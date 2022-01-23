import { EpisodeCard } from '../EpisodeCard';

import { App } from './styles';

export interface ImageProps {
  medium: string;
  original: string;
}

export interface EpisodeType {
  id: number;
  season: number;
  number: number;
  image: ImageProps;
  name: string;
  summary: string;
}

export interface EpisodesProps {
  episodes: never[];
  map?: () => void;
}

export const Episodes = ({ episodes }: EpisodesProps) => {
  return (
    <App>
      {episodes?.map((episode: EpisodeType) => (
        <EpisodeCard
          key={episode.id}
          season={episode.season}
          number={episode.number}
          image={episode.image}
          name={episode.name}
          summary={episode?.summary}
        />
      ))}
    </App>
  );
};
