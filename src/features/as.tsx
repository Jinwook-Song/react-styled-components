import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: purple;
  border: 0;
  border-radius: 15px;
`;

function As() {
  return (
    <Container>
      <Btn>Log in</Btn>
      <Btn as='a' href='/'>
        Log in
      </Btn>
    </Container>
  );
}

export default As;
