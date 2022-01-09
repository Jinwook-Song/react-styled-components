import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

interface IBox {
  bgColor?: string;
}

const Box = styled.div<IBox>`
  background-color: ${(props) => props.bgColor ?? 'teal'};
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <Container>
      <Box />
      <Box bgColor='tomato' />
    </Container>
  );
}

export default App;
