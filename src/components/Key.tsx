import styled from 'styled-components';
import hexToRGBA from '@/utils/hexToRGBA';

type TProps = {
  name: string;
  onClick: () => void;
};

const Key = ({ name, onClick }: TProps) => {
  return <Container onMouseDown={onClick}>{name}</Container>;
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
