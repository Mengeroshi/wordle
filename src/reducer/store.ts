import { TReducerState } from '../types';

const wordleStore: TReducerState = {
  isDayThemeTurnedOn: false,
  isIntructionsModalOpen: true,
  isStatsModalOpen: false,
  game: {
    wordToDiscover: null,
    wordBuffer: '',
    wordsInBoard: [],
    alreadyPlayedWords: [],
    started: false,
  },
  stats: [],
};

export default wordleStore;
