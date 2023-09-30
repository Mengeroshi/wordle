/* eslint-disable operator-linebreak */
import { LetterStatusObject } from '../types/index';
import namesArray from './names';

export const letterIsInCorrectIndex = (
  letterObj: { letter: string; index: number },
  wordToDiscover: string,
) => wordToDiscover.indexOf(letterObj.letter) === letterObj.index;

export const letterStatusAssignation = (
  letterObj: { letter: string; index: number },
  wordToDiscover: string,
) => {
  if (wordToDiscover.includes(letterObj.letter)) {
    if (letterIsInCorrectIndex(letterObj, wordToDiscover)) {
      return LetterStatusObject.CORRECT;
    }
    return LetterStatusObject.INTOTHEWORD;
  }

  return LetterStatusObject.WRONG;
};

export const accentRemover = (word: string) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export const getRandomWordFromList = (alreadyPlayedWords: string[]): string => {
  const selectedWord =
    namesArray[Math.floor(Math.random() * namesArray.length)];
  if (alreadyPlayedWords.includes(selectedWord)) {
    return getRandomWordFromList(alreadyPlayedWords);
  }
  return accentRemover(selectedWord);
};

export const onStartGame = (
  // eslint-disable-next-line no-unused-vars
  startGame: (wordToDiscover: string) => void,
  alreadyPlayedWords: string[],
) => {
  const wordToDiscover = getRandomWordFromList(alreadyPlayedWords);
  startGame(wordToDiscover);
};
