import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getEpisodes } from '../../actions/index';

import { Episodes } from '../../components/Episodes';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';

import {
  Container,
  ContainerSection,
  SearchContainer,
  ButtonContainer,
} from './styles';

export interface Episodes {
  name: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Show {
  name: string;
  image: Image;
  summary: string;
}

const Home = ({ episodes, getEpisodes }) => {
  const [episodesShow, setEpisodesShow] = useState<[]>();
  const [allEpisodes, setAllEpisodes] = useState<[]>();
  const [show, setShow] = useState<Show>();
  const [page, setPage] = useState<number>(0);
  const [episodesPerPage, setEpisodesPerPage] = useState<number>(9);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    getEpisodes();
  }, [getEpisodes]);

  useEffect(() => {
    setShow(episodes?.show);
    setAllEpisodes(episodes?.allEpisodes);
    setEpisodesShow(episodes?.allEpisodes.slice(page, episodesPerPage));
  }, [episodes]);

  const loadMoreEpisodes = () => {
    const nextPage = page + episodesPerPage;
    const nextEpisodes = allEpisodes.slice(
      nextPage,
      nextPage + episodesPerPage,
    );
    episodesShow.push(...nextEpisodes);

    setEpisodesShow(episodesShow);
    setPage(nextPage);
  };

  const handleChange = (valueTyped: string) => {
    setSearchValue(valueTyped);
  };

  const noMoreEpisodes = page + episodesPerPage >= allEpisodes?.length;
  const filteredEpisodes = !!searchValue
    ? allEpisodes.filter((epi: Episodes) =>
        epi.name.toLowerCase().includes(searchValue.toLocaleLowerCase()),
      )
    : episodesShow;

  return (
    <Container>
      <ContainerSection>
        <Header name={show?.name} image={show?.image} summary={show?.summary} />
        <hr />
        <SearchContainer>
          <span>Title search: </span>
          <SearchInput
            searchValue={searchValue}
            handleChange={(e) => handleChange(e.target.value)}
          />
        </SearchContainer>
        <Episodes episodes={filteredEpisodes} />
        <ButtonContainer>
          {!searchValue && (
            <Button
              text="Load more episodes"
              onClick={() => loadMoreEpisodes()}
              disabled={noMoreEpisodes}
            />
          )}
        </ButtonContainer>
      </ContainerSection>
    </Container>
  );
};

const mapStateToProps = store => {
  return {
    episodes: store.episodesState.episodes
  }
}

export default connect(mapStateToProps, { getEpisodes })(Home);