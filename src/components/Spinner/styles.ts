import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerLoad = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #22a6b3;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;

  margin: 5rem auto;
`;
