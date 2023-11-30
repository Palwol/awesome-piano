import styled from 'styled-components';

const Home = () => {
  return (
    <Main>
      <h1>Hello</h1>
    </Main>
  );
};

export default Home;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
