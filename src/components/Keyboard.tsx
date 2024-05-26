import styled from 'styled-components';
import Key from './Key';

const Keyboard = () => {
  const playBuffer = (audioCtx: AudioContext) => (buffer: AudioBuffer) => {
    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.connect(audioCtx.destination);
    source.start();
  };

  const handleKeyClick = (filePath: string) => async () => {
    const audioCtx = new AudioContext();
    try {
      const response = await fetch(filePath);
      audioCtx.decodeAudioData(await response.arrayBuffer(), playBuffer(audioCtx));
    } catch (e) {
      console.error(`파일을 읽을 수 없어요!`);
    }
  };

  return (
    <Container>
      <Key name="도" onClick={handleKeyClick('/assets/piano/C3.mp3')} />
      <Key name="레" onClick={handleKeyClick('/assets/piano/D3.mp3')} />
      <Key name="미" onClick={handleKeyClick('/assets/piano/E3.mp3')} />
    </Container>
  );
};

export default Keyboard;

const Container = styled.div`
  display: flex;
`;
