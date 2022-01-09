import styled from 'styled-components';

interface IBox {
  bgColor?: string;
}

const Container = styled.div`
  display: flex;
`;

const Box = styled.div<IBox>`
  background-color: ${(props) => props.bgColor ?? 'teal'};
  width: 100px;
  height: 100px;
`;

const Circle = styled(Box)`
  border-radius: 100%;
`;

function AdaptExtend() {
  return (
    <Container>
      <Box />
      <Circle bgColor='tomato' />
    </Container>
  );
}

export default AdaptExtend;
