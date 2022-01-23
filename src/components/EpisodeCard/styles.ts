import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Episode = styled.div`
  background: #ffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 100ms ease-in-out;
  border-radius: 20px;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }

  & img {
    max-width: 100%;
    width: 100%;
    border-radius: 20px 20px 0 0;
  }

  & p {
    margin-top: 1rem;
  }
`;

export const EpisodeLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const EpisodeContent = styled.div`
  padding: 30px;
`;
