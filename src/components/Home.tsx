import styled from 'styled-components';
import Keyboard from './Keyboard';

const Home = () => {
  return (
    <Main>
      <Keyboard />
    </Main>
  );
};

export default Home;

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
