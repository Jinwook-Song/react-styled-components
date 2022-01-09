import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: teal;
`;

function Attrs() {
  return (
    <Container>
      <Input />
      <Input />
      <Input />
    </Container>
  );
}

export default Attrs;
