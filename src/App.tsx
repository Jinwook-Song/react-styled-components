import styled from 'styled-components';

import AdaptExtend from './features/adapt-extend';
import Animations from './features/animations';
import As from './features/as';
import Attrs from './features/attrs';

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  return (
    <Container>
      <AdaptExtend />
      <As />
      <Attrs />
      <Animations />
    </Container>
  );
}

export default App;
