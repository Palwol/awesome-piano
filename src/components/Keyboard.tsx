import styled from 'styled-components';
import Key from './Key';

const Keyboard = () => {
  const audioCtx = new AudioContext();

  return (
    <Container>
      <Key name="A" filePath="/assets/piano/C3.mp3" audioCtx={audioCtx} keyCode="KeyA" />
      <Key name="S" filePath="/assets/piano/D3.mp3" audioCtx={audioCtx} keyCode="KeyS" />
      <Key name="D" filePath="/assets/piano/E3.mp3" audioCtx={audioCtx} keyCode="KeyD" />
      <Key name="F" filePath="/assets/piano/F3.mp3" audioCtx={audioCtx} keyCode="KeyF" />
      <Key name="G" filePath="/assets/piano/G3.mp3" audioCtx={audioCtx} keyCode="KeyG" />
      <Key name="H" filePath="/assets/piano/A3.mp3" audioCtx={audioCtx} keyCode="KeyH" />
      <Key name="J" filePath="/assets/piano/B3.mp3" audioCtx={audioCtx} keyCode="KeyJ" />
      <Key name="K" filePath="/assets/piano/C4.mp3" audioCtx={audioCtx} keyCode="KeyK" />
      <Key name="L" filePath="/assets/piano/D4.mp3" audioCtx={audioCtx} keyCode="KeyL" />
      <Key name=";" filePath="/assets/piano/E4.mp3" audioCtx={audioCtx} keyCode="Semicolon" />
      <Key name="'" filePath="/assets/piano/F4.mp3" audioCtx={audioCtx} keyCode="Quote" />
    </Container>
  );
};

export default Keyboard;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 2px;
`;
