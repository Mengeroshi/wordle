import { TReducerState } from '../types';

const wordleStore: TReducerState = {
  isDayThemeTurnedOn: false,
  isIntructionsModalOpen: false,
  isStatsModalOpen: false,
  game: {
    wordToDiscover: null,
    wordBuffer: '',
    wordsInBoard: [],
    alreadyPlayedWords: [],
    started: false,
  },
};

export default wordleStore;
