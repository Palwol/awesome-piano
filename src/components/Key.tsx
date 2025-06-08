import styled from 'styled-components';
import hexToRGBA from '@/utils/hexToRGBA';
import { useEffect, useState, useCallback } from 'react';

type TProps = {
  name: string;
  filePath: string;
  audioCtx: AudioContext;
  keyCode: string;
};

const Key = ({ name, filePath, audioCtx, keyCode }: TProps) => {
  const [fileArrayBuffer, setFileArrayBuffer] = useState<ArrayBuffer>();
  const [buffer, setBuffer] = useState<AudioBuffer>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [source, setSource] = useState<AudioBufferSourceNode | null>(null);

  const playSound = useCallback(async () => {
    if (!buffer || isPlaying || source) return;

    if (audioCtx.state === 'suspended') {
      await audioCtx.resume();
    }

    const newSource = audioCtx.createBufferSource();
    const gainNode = audioCtx.createGain();

    // ADSR 엔벨로프 설정
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01); // Attack
    gainNode.gain.linearRampToValueAtTime(0.7, audioCtx.currentTime + 0.1); // Decay
    gainNode.gain.linearRampToValueAtTime(0.7, audioCtx.currentTime + 0.5); // Sustain

    newSource.buffer = buffer;
    newSource.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    newSource.start();
    setSource(newSource);
    setIsPlaying(true);

    newSource.onended = () => {
      setIsPlaying(false);
      setSource(null);
    };
  }, [buffer, audioCtx, isPlaying, source]);

  const stopSound = useCallback(() => {
    if (!isPlaying || !source) return;

    source.stop();
    source.disconnect();
    setIsPlaying(false);
    setSource(null);
  }, [isPlaying, source]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === keyCode && !e.repeat) {
        playSound();
      }
    },
    [keyCode, playSound],
  );

  const handleKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (e.code === keyCode) {
        stopSound();
      }
    },
    [keyCode, stopSound],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  useEffect(() => {
    try {
      fetch(filePath).then(async (res) => setFileArrayBuffer(await res.arrayBuffer()));
    } catch (e) {
      console.error(`파일을 읽을 수 없어요!`);
    }
  }, [filePath]);

  useEffect(() => {
    if (fileArrayBuffer) {
      audioCtx.decodeAudioData(fileArrayBuffer).then(setBuffer);
    }
  }, [fileArrayBuffer, audioCtx]);

  return (
    <Container onMouseDown={playSound} onMouseUp={stopSound} $isPlaying={isPlaying}>
      <KeyName>{name}</KeyName>
    </Container>
  );
};

export default Key;

const Container = styled.div<{ $isPlaying: boolean }>`
  width: 55px;
  height: 190px;
  padding: 10px;
  border: 1px solid ${hexToRGBA('#959595', 0.5)};
  border-radius: 5px;
  background-color: ${(props) => (props.$isPlaying ? '#f0f0f0' : '#ffffff')};
  box-shadow: 0 ${(props) => (props.$isPlaying ? '2px' : '5px')} 1px rgba(32, 32, 32, 0.2);
  cursor: pointer;
  transition: all 0.1s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const KeyName = styled.span`
  font-size: 16px;
  color: #666;
  margin-bottom: 5px;
`;
