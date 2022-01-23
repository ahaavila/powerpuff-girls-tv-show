import { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';

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

export const Home = () => {
  const [episodes, setEpisodes] = useState<[]>();
  const [allEpisodes, setAllEpisodes] = useState<[]>();
  const [show, setShow] = useState<Show>();
  const [page, setPage] = useState<number>(0);
  const [episodesPerPage, setEpisodesPerPage] = useState<number>(9);
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    getEpisodes();
  }, []);

  const getEpisodes = async () => {
    const params = qs.stringify({
      q: 'Powerpuff Girls 2016',
      embed: 'episodes',
    });
    const response = await axios.get(
      `https://api.tvmaze.com/singlesearch/shows?${params}`,
    );
    console.log(response);

    setShow(response.data);
    setAllEpisodes(response.data._embedded.episodes);
    setEpisodes(response.data._embedded.episodes.slice(page, episodesPerPage));
  };

  const loadMoreEpisodes = () => {
    const nextPage = page + episodesPerPage;
    const nextEpisodes = allEpisodes.slice(
      nextPage,
      nextPage + episodesPerPage,
    );
    episodes.push(...nextEpisodes);

    setEpisodes(episodes);
    setPage(nextPage);
  };

  const handleChange = (valueTyped: string) => {
    setSearchValue(valueTyped);
  };

  const noMoreEpisodes = page + episodesPerPage >= allEpisodes?.length;
  const filteredEpisodes = !!searchValue
    ? allEpisodes.filter((episodes: Episodes) =>
        episodes.name.toLowerCase().includes(searchValue.toLocaleLowerCase()),
      )
    : episodes;

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
