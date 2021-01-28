import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   background-size: cover;
//   flex: 1;
//   background-position: center
// `
export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>
          LocalDev - Alura
        </title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>
              CSS QUIZ
            </h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event) {
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <input
                onChange={function (event) {
                  setName(event.target.value);
                }}
                placeholder="Digite seu Nome"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>
              CSS QUIZ da galera
            </h1>
            <p>
              sacnuincwnduonwvwv
            </p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/viniciusprog777" />
    </QuizBackground>
  );
}
