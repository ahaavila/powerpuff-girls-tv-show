import styled from 'styled-components';

export const ContainerHeader = styled.header`
  & img {
    border-radius: 20px;
    margin-right: 1rem;
  }

  & p {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    font-weight: 500;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
  }

  & h1 {
    font-size: 3rem;
    text-align: center;
    padding: 5px;
  }
`;

export const HeaderSummary = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;

  & p {
    font-size: 1.5rem;
    text-align: center;
    padding: 10px;
  }
`;
