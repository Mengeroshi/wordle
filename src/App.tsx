import React, { useState } from 'react';
import styles from './App.module.scss';
import Instructions from './components/organisms/Instructions/Instructions';
import Header from './components/organisms/Header/Header';
import WordBoard from './components/organisms/WordBoard/WordBoard';
import Keyboard from './components/organisms/Keyboard/Keyboard';
import { useGetWordleContext } from './context';

function App() {
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(false);
  const [isNightModeTurnedOn, setIsNightModeTurnedOn] = useState(true);
  const wordleContext = useGetWordleContext();
  console.log(wordleContext);
  return (
    <main className={`${styles.main} ${isNightModeTurnedOn ? 'NIGHT' : 'DAY'}`}>
      <Header
        isNightModeTurnedOn={isNightModeTurnedOn}
        setIsNightModeTurnedOn={setIsNightModeTurnedOn}
      />
      <WordBoard />
      <Keyboard />
      <Instructions
        isOpen={isInstructionsModalOpen}
        onClose={() => { setIsInstructionsModalOpen(false); }}
        isNightModeTurnedOn={isNightModeTurnedOn}
      />
    </main>
  );
}

export default App;
