import styled from 'styled-components';
import Key from './Key';

const Keyboard = () => {
  const audioCtx = new AudioContext();

  return (
    <Container>
      <Key name="A" filePath="/assets/piano/C3.mp3" audioCtx={audioCtx} keyCode="KeyA" />
      <Key name="W" filePath="/assets/piano/Db3.mp3" audioCtx={audioCtx} keyCode="KeyW" isBlack />
      <Key name="S" filePath="/assets/piano/D3.mp3" audioCtx={audioCtx} keyCode="KeyS" />
      <Key name="E" filePath="/assets/piano/Eb3.mp3" audioCtx={audioCtx} keyCode="KeyE" isBlack />
      <Key name="D" filePath="/assets/piano/E3.mp3" audioCtx={audioCtx} keyCode="KeyD" />
      <Key name="F" filePath="/assets/piano/F3.mp3" audioCtx={audioCtx} keyCode="KeyF" />
      <Key name="T" filePath="/assets/piano/Gb3.mp3" audioCtx={audioCtx} keyCode="KeyT" isBlack />
      <Key name="G" filePath="/assets/piano/G3.mp3" audioCtx={audioCtx} keyCode="KeyG" />
      <Key name="Y" filePath="/assets/piano/Ab3.mp3" audioCtx={audioCtx} keyCode="KeyY" isBlack />
      <Key name="H" filePath="/assets/piano/A3.mp3" audioCtx={audioCtx} keyCode="KeyH" />
      <Key name="U" filePath="/assets/piano/Bb3.mp3" audioCtx={audioCtx} keyCode="KeyU" isBlack />
      <Key name="J" filePath="/assets/piano/B3.mp3" audioCtx={audioCtx} keyCode="KeyJ" />
      <Key name="K" filePath="/assets/piano/C4.mp3" audioCtx={audioCtx} keyCode="KeyK" />
      <Key name="O" filePath="/assets/piano/Db4.mp3" audioCtx={audioCtx} keyCode="KeyO" isBlack />
      <Key name="L" filePath="/assets/piano/D4.mp3" audioCtx={audioCtx} keyCode="KeyL" />
      <Key name="P" filePath="/assets/piano/Eb4.mp3" audioCtx={audioCtx} keyCode="KeyP" isBlack />
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
  position: relative;
`;
