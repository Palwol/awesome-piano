import styled from 'styled-components';
import Key from './Key';

const Keyboard = () => {
  const audioCtx = new AudioContext();

  return (
    <Container>
      <Row>
        <Key name="Q" filePath="/assets/piano/F4.mp3" audioCtx={audioCtx} keyCode="KeyQ" />
        <Key name="W" filePath="/assets/piano/G4.mp3" audioCtx={audioCtx} keyCode="KeyW" />
        <Key name="E" filePath="/assets/piano/A4.mp3" audioCtx={audioCtx} keyCode="KeyE" />
        <Key name="R" filePath="/assets/piano/B4.mp3" audioCtx={audioCtx} keyCode="KeyR" />
        <Key name="T" filePath="/assets/piano/C5.mp3" audioCtx={audioCtx} keyCode="KeyT" />
        <Key name="Y" filePath="/assets/piano/D5.mp3" audioCtx={audioCtx} keyCode="KeyY" />
        <Key name="U" filePath="/assets/piano/E5.mp3" audioCtx={audioCtx} keyCode="KeyU" />
        <Key name="I" filePath="/assets/piano/F5.mp3" audioCtx={audioCtx} keyCode="KeyI" />
        <Key name="O" filePath="/assets/piano/G5.mp3" audioCtx={audioCtx} keyCode="KeyO" />
        <Key name="P" filePath="/assets/piano/A5.mp3" audioCtx={audioCtx} keyCode="KeyP" />
        <Key name="[" filePath="/assets/piano/B5.mp3" audioCtx={audioCtx} keyCode="BracketLeft" />
        <Key name="]" filePath="/assets/piano/C6.mp3" audioCtx={audioCtx} keyCode="BracketRight" />
        <BlackRow>
          <Key name="2" filePath="/assets/piano/Gb4.mp3" audioCtx={audioCtx} keyCode="Digit2" isBlack left={30.5} />
          <Key name="3" filePath="/assets/piano/Ab4.mp3" audioCtx={audioCtx} keyCode="Digit3" isBlack left={87.5} />
          <Key name="4" filePath="/assets/piano/Bb4.mp3" audioCtx={audioCtx} keyCode="Digit4" isBlack left={144.5} />
          <Key name="6" filePath="/assets/piano/Db5.mp3" audioCtx={audioCtx} keyCode="Digit6" isBlack left={258.5} />
          <Key name="7" filePath="/assets/piano/Eb5.mp3" audioCtx={audioCtx} keyCode="Digit7" isBlack left={315.5} />
          <Key name="9" filePath="/assets/piano/Gb5.mp3" audioCtx={audioCtx} keyCode="Digit9" isBlack left={429.5} />
          <Key name="0" filePath="/assets/piano/Ab5.mp3" audioCtx={audioCtx} keyCode="Digit0" isBlack left={486.5} />
          <Key name="-" filePath="/assets/piano/Bb5.mp3" audioCtx={audioCtx} keyCode="Minus" isBlack left={543.5} />
        </BlackRow>
      </Row>
      <Row>
        <Key name="Z" filePath="/assets/piano/C3.mp3" audioCtx={audioCtx} keyCode="KeyZ" />
        <Key name="X" filePath="/assets/piano/D3.mp3" audioCtx={audioCtx} keyCode="KeyX" />
        <Key name="C" filePath="/assets/piano/E3.mp3" audioCtx={audioCtx} keyCode="KeyC" />
        <Key name="V" filePath="/assets/piano/F3.mp3" audioCtx={audioCtx} keyCode="KeyV" />
        <Key name="B" filePath="/assets/piano/G3.mp3" audioCtx={audioCtx} keyCode="KeyB" />
        <Key name="N" filePath="/assets/piano/A3.mp3" audioCtx={audioCtx} keyCode="KeyN" />
        <Key name="M" filePath="/assets/piano/B3.mp3" audioCtx={audioCtx} keyCode="KeyM" />
        <Key name="," filePath="/assets/piano/C4.mp3" audioCtx={audioCtx} keyCode="Comma" />
        <Key name="." filePath="/assets/piano/D4.mp3" audioCtx={audioCtx} keyCode="Period" />
        <Key name="/" filePath="/assets/piano/E4.mp3" audioCtx={audioCtx} keyCode="Slash" />
        <BlackRow>
          <Key name="S" filePath="/assets/piano/Db3.mp3" audioCtx={audioCtx} keyCode="KeyS" isBlack left={30.5} />
          <Key name="D" filePath="/assets/piano/Eb3.mp3" audioCtx={audioCtx} keyCode="KeyD" isBlack left={87.5} />
          <Key name="G" filePath="/assets/piano/Gb3.mp3" audioCtx={audioCtx} keyCode="KeyG" isBlack left={201.5} />
          <Key name="H" filePath="/assets/piano/Ab3.mp3" audioCtx={audioCtx} keyCode="KeyH" isBlack left={258.5} />
          <Key name="J" filePath="/assets/piano/Bb3.mp3" audioCtx={audioCtx} keyCode="KeyJ" isBlack left={315.5} />
          <Key name="L" filePath="/assets/piano/Db4.mp3" audioCtx={audioCtx} keyCode="KeyL" isBlack left={429.5} />
          <Key name=";" filePath="/assets/piano/Eb4.mp3" audioCtx={audioCtx} keyCode="Semicolon" isBlack left={486.5} />
        </BlackRow>
      </Row>
    </Container>
  );
};

export default Keyboard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20px;
`;

const Row = styled.div`
  display: flex;
  gap: 2px;
  position: relative;
`;

const BlackRow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
`;
