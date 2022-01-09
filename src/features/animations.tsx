import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const roateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
        border-radius: 0px;
    } 50% {
        border-radius: 100px;
    } 100% {
        transform: rotate(360deg);
        border-radius: 0px;
    }
`;

const Box = styled.button`
  width: 200px;
  height: 200px;
  background-color: tomato;
  animation: ${roateAnimation} 1s linear infinite;
`;

function Animations() {
  return (
    <Container>
      <Box />
    </Container>
  );
}

export default Animations;
