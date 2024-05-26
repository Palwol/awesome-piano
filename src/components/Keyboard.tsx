import styled from 'styled-components';
import Key from './Key';

const Keyboard = () => {
  const audioCtx = new AudioContext();

  return (
    <Container>
      <Key name="도" filePath="/assets/piano/C3.mp3" audioCtx={audioCtx} />
      <Key name="레" filePath="/assets/piano/D3.mp3" audioCtx={audioCtx} />
      <Key name="미" filePath="/assets/piano/E3.mp3" audioCtx={audioCtx} />
    </Container>
  );
};

export default Keyboard;

const Container = styled.div`
  display: flex;
`;
