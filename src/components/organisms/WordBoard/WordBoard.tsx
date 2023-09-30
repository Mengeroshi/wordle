import React from 'react';
import Word from '../../molecules/Word/Word';
import styles from './WordBoard.module.scss';
import { useGetWordleContext } from '../../../context';

export default function WordBoard() {
  const {
    wordleState: {
      game: { wordsInBoard, wordBuffer, wordToDiscover },
    },

  } = useGetWordleContext();

  const wordAssigment = (index: number) => {
    if (wordsInBoard.length === index) {
      return wordBuffer;
    }
    if (wordsInBoard[index] === undefined) {
      return '';
    }
    return wordsInBoard[index];
  };

  return (
    <div className={styles.main}>
      <Word
        word={wordAssigment(0)}
        wordToDiscover={wordToDiscover}
        editing={wordsInBoard.length <= 0}
      />
      <Word
        word={wordAssigment(1)}
        wordToDiscover={wordToDiscover}
        editing={wordsInBoard.length <= 1}
      />
      <Word
        word={wordAssigment(2)}
        wordToDiscover={wordToDiscover}
        editing={wordsInBoard.length <= 2}
      />
      <Word
        word={wordAssigment(3)}
        wordToDiscover={wordToDiscover}
        editing={wordsInBoard.length <= 3}
      />
      <Word
        word={wordAssigment(4)}
        wordToDiscover={wordToDiscover}
        editing={wordsInBoard.length <= 4}
      />
    </div>
  );
}
