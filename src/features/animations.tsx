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

const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.button`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${roateAnimation} 1s linear infinite;
  // pseudo selector
  ${Emoji} {
    &:hover {
      font-size: 48px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function Animations() {
  return (
    <Container>
      <Box>
        <Emoji as='p'>⭐</Emoji>
      </Box>
    </Container>
  );
}

export default Animations;
