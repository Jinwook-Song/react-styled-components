import styled from 'styled-components';

import AdaptExtend from './features/adapt-extend';
import As from './features/as';
import Attrs from './features/attrs';

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
`;

function App() {
  return (
    <Container>
      <AdaptExtend />
      <As />
      <Attrs />
    </Container>
  );
}

export default App;
