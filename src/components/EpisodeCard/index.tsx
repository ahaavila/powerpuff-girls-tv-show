import { convertXmlToString } from '../../utils/convertXmlToString';

import { Episode, EpisodeLink, EpisodeContent } from './styles';

export interface ImageProps {
  medium: string;
  original: string;
}

export interface EpisodeCardProps {
  key?: number;
  season: number;
  number: number;
  image: ImageProps;
  name: string;
  summary: string;
}

export const EpisodeCard = ({
  season,
  number,
  image,
  name,
  summary,
}: EpisodeCardProps) => (
  <Episode>
    <EpisodeLink to={`/episode/${season}/${number}`}>
      <img src={image?.medium || '/No-image-found.png'} alt="Episode" />
      <EpisodeContent>
        <h2>{name}</h2>
        <p>{convertXmlToString(summary) || 'No summary, yet'}</p>
      </EpisodeContent>
    </EpisodeLink>
  </Episode>
);
