import React from 'react';
import styles from './App.module.scss';
import Instructions from './components/organisms/Instructions/Instructions';
import Header from './components/organisms/Header/Header';
import WordBoard from './components/organisms/WordBoard/WordBoard';
import Keyboard from './components/organisms/Keyboard/Keyboard';
import { useGetWordleContext } from './context';

function App() {
  const { wordleState: { isDayThemeTurnedOn } } = useGetWordleContext();
  return (
    <main className={`${styles.main} ${isDayThemeTurnedOn ? 'DAY' : 'NIGHT'}`}>
      <Header />
      <WordBoard />
      <Keyboard />
      <Instructions />
    </main>
  );
}

export default App;
