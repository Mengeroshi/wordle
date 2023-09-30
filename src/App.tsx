import React, { useEffect } from 'react';
import styles from './App.module.scss';
import Instructions from './components/organisms/Instructions/Instructions';
import Header from './components/organisms/Header/Header';
import WordBoard from './components/organisms/WordBoard/WordBoard';
import Keyboard from './components/organisms/Keyboard/Keyboard';
import { useGetWordleContext } from './context';
import StatsModal from './components/molecules/StatsModal/StatsModal';

function App() {
  const {
    wordleState: {
      isDayThemeTurnedOn,
      game: { wordToDiscover, wordsInBoard, started },

    },
    modifiers: {
      gameOver,

    },
  } = useGetWordleContext();
  useEffect(() => {
    if (
      ((wordToDiscover === wordsInBoard[wordsInBoard.length - 1])
        || (wordsInBoard.length === 5))
      && (started)) {
      gameOver();
    }
  }, [wordToDiscover, wordsInBoard, started]);
  return (
    <main className={`${styles.main} ${isDayThemeTurnedOn ? 'DAY' : 'NIGHT'}`}>
      <Header />
      <WordBoard />
      <Keyboard />
      <Instructions />
      <StatsModal />
    </main>
  );
}

export default App;
