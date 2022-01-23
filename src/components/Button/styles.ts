import styled from 'styled-components';

export const LoadMoreButton = styled.button`
  width: 100%;
  background: #32daf0;
  color: black;
  border: none;
  padding: 15px 30px;
  cursor: pointer;
  font-size: 1rem;

  &:disabled {
    background: #888;
    cursor: not-allowed;
  }

  &:hover {
    background: #2399a9;
  }
`;
