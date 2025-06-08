import styled from 'styled-components';
import Key from './Key';

interface KeyConfig {
  name: string;
  filePath: string;
  keyCode: string;
  isBlack?: boolean;
  left?: number;
}

const whiteKeys: KeyConfig[] = [
  { name: 'Z', filePath: '/assets/piano/C3.mp3', keyCode: 'KeyZ' },
  { name: 'X', filePath: '/assets/piano/D3.mp3', keyCode: 'KeyX' },
  { name: 'C', filePath: '/assets/piano/E3.mp3', keyCode: 'KeyC' },
  { name: 'V', filePath: '/assets/piano/F3.mp3', keyCode: 'KeyV' },
  { name: 'B', filePath: '/assets/piano/G3.mp3', keyCode: 'KeyB' },
  { name: 'N', filePath: '/assets/piano/A3.mp3', keyCode: 'KeyN' },
  { name: 'M', filePath: '/assets/piano/B3.mp3', keyCode: 'KeyM' },
  { name: ',', filePath: '/assets/piano/C4.mp3', keyCode: 'Comma' },
  { name: '.', filePath: '/assets/piano/D4.mp3', keyCode: 'Period' },
  { name: '/', filePath: '/assets/piano/E4.mp3', keyCode: 'Slash' },
];

const blackKeys: KeyConfig[] = [
  { name: 'S', filePath: '/assets/piano/Db3.mp3', keyCode: 'KeyS', isBlack: true, left: 30.5 },
  { name: 'D', filePath: '/assets/piano/Eb3.mp3', keyCode: 'KeyD', isBlack: true, left: 87.5 },
  { name: 'G', filePath: '/assets/piano/Gb3.mp3', keyCode: 'KeyG', isBlack: true, left: 201.5 },
  { name: 'H', filePath: '/assets/piano/Ab3.mp3', keyCode: 'KeyH', isBlack: true, left: 258.5 },
  { name: 'J', filePath: '/assets/piano/Bb3.mp3', keyCode: 'KeyJ', isBlack: true, left: 315.5 },
  { name: 'L', filePath: '/assets/piano/Db4.mp3', keyCode: 'KeyL', isBlack: true, left: 429.5 },
  { name: ';', filePath: '/assets/piano/Eb4.mp3', keyCode: 'Semicolon', isBlack: true, left: 486.5 },
];

const whiteKeys2: KeyConfig[] = [
  { name: 'Q', filePath: '/assets/piano/F4.mp3', keyCode: 'KeyQ' },
  { name: 'W', filePath: '/assets/piano/G4.mp3', keyCode: 'KeyW' },
  { name: 'E', filePath: '/assets/piano/A4.mp3', keyCode: 'KeyE' },
  { name: 'R', filePath: '/assets/piano/B4.mp3', keyCode: 'KeyR' },
  { name: 'T', filePath: '/assets/piano/C5.mp3', keyCode: 'KeyT' },
  { name: 'Y', filePath: '/assets/piano/D5.mp3', keyCode: 'KeyY' },
  { name: 'U', filePath: '/assets/piano/E5.mp3', keyCode: 'KeyU' },
  { name: 'I', filePath: '/assets/piano/F5.mp3', keyCode: 'KeyI' },
  { name: 'O', filePath: '/assets/piano/G5.mp3', keyCode: 'KeyO' },
  { name: 'P', filePath: '/assets/piano/A5.mp3', keyCode: 'KeyP' },
  { name: '[', filePath: '/assets/piano/B5.mp3', keyCode: 'BracketLeft' },
  { name: ']', filePath: '/assets/piano/C6.mp3', keyCode: 'BracketRight' },
];

const blackKeys2: KeyConfig[] = [
  { name: '2', filePath: '/assets/piano/Gb4.mp3', keyCode: 'Digit2', isBlack: true, left: 30.5 },
  { name: '3', filePath: '/assets/piano/Ab4.mp3', keyCode: 'Digit3', isBlack: true, left: 87.5 },
  { name: '4', filePath: '/assets/piano/Bb4.mp3', keyCode: 'Digit4', isBlack: true, left: 144.5 },
  { name: '6', filePath: '/assets/piano/Db5.mp3', keyCode: 'Digit6', isBlack: true, left: 258.5 },
  { name: '7', filePath: '/assets/piano/Eb5.mp3', keyCode: 'Digit7', isBlack: true, left: 315.5 },
  { name: '9', filePath: '/assets/piano/Gb5.mp3', keyCode: 'Digit9', isBlack: true, left: 429.5 },
  { name: '0', filePath: '/assets/piano/Ab5.mp3', keyCode: 'Digit0', isBlack: true, left: 486.5 },
  { name: '-', filePath: '/assets/piano/Bb5.mp3', keyCode: 'Minus', isBlack: true, left: 543.5 },
];

const Keyboard = () => {
  const audioCtx = new AudioContext();

  return (
    <Container>
      <Logo>Awesome Piano</Logo>
      <Row>
        {whiteKeys2.map((key) => (
          <Key
            key={key.keyCode}
            name={key.name}
            filePath={key.filePath}
            audioCtx={audioCtx}
            keyCode={key.keyCode}
            isBlack={key.isBlack}
            left={key.left}
          />
        ))}
        <BlackRow>
          {blackKeys2.map((key) => (
            <Key
              key={key.keyCode}
              name={key.name}
              filePath={key.filePath}
              audioCtx={audioCtx}
              keyCode={key.keyCode}
              isBlack={key.isBlack}
              left={key.left}
            />
          ))}
        </BlackRow>
      </Row>
      <Row>
        {whiteKeys.map((key) => (
          <Key
            key={key.keyCode}
            name={key.name}
            filePath={key.filePath}
            audioCtx={audioCtx}
            keyCode={key.keyCode}
            isBlack={key.isBlack}
            left={key.left}
          />
        ))}
        <BlackRow>
          {blackKeys.map((key) => (
            <Key
              key={key.keyCode}
              name={key.name}
              filePath={key.filePath}
              audioCtx={audioCtx}
              keyCode={key.keyCode}
              isBlack={key.isBlack}
              left={key.left}
            />
          ))}
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

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
  font-family: 'Arial', sans-serif;
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
