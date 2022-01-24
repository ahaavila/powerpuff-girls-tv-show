import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEpisodeById } from '../../actions/index';

import { Header } from '../../components/Header';
import { EpisodeInfo } from '../../components/EpisodeInfo';
import { Spinner } from '../../components/Spinner';

import { EpisodeContainer, EpisodeSection } from './styles';

const EpisodeDetails = ({ episode, getEpisodeById }) => {
  const { season, number } = useParams();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getEpisodeById(season, number);
    setLoading(false);
  }, [getEpisodeById]);

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

const mapStateToProps = store => {
  return {
    episode: store.episodeState.episode
  }
}

export default connect(mapStateToProps, { getEpisodeById })(EpisodeDetails);