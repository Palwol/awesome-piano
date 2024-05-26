import styled from 'styled-components';
import hexToRGBA from '@/utils/hexToRGBA';
import { useEffect, useState } from 'react';

type TProps = {
  name: string;
  filePath: string;
  audioCtx: AudioContext;
};

const Key = ({ name, filePath, audioCtx }: TProps) => {
  const [fileArrayBuffer, setFileArrayBuffer] = useState<ArrayBuffer>();
  const [buffer, setBuffer] = useState<AudioBuffer>();
  const [source, setSource] = useState<AudioBufferSourceNode>();

  const playBuffer = (buffer: AudioBuffer) => {
    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    source.connect(audioCtx.destination);
    source.start();
    setSource(source);
  };

  const handleMouseDown = async () => {
    if (!fileArrayBuffer) return;

    if (audioCtx.state === 'suspended') {
      await audioCtx.resume();
    }

    if (source && buffer) {
      source.stop();
      source.disconnect();
      playBuffer(buffer);
      return;
    }

    const _buffer = await audioCtx.decodeAudioData(fileArrayBuffer);
    playBuffer(_buffer);
    setBuffer(_buffer);
  };

  const handleMouseUp = async () => {
    if (!source) return;

    source.stop();
  };

  useEffect(() => {
    try {
      fetch(filePath).then(async (res) => setFileArrayBuffer(await res.arrayBuffer()));
    } catch (e) {
      console.error(`파일을 읽을 수 없어요!`);
    }
  }, [filePath]);

  return (
    <Container onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      {name}
    </Container>
  );
};

export default Key;

const Container = styled.div`
  width: 40px;
  height: 190px;
  padding: 10px;
  border: 1px solid ${hexToRGBA('#959595', 0.5)};
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 5px 1px rgba(32, 32, 32, 0.2);
  cursor: pointer;
`;
