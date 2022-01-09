import AdaptExtend from './features/adapt-extend';
import As from './features/as';

import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-gap: 20px;
`;

function App() {
  return (
    <Container>
      <AdaptExtend />
      <As />
    </Container>
  );
}

export default App;
