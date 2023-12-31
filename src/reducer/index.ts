/* eslint-disable operator-linebreak */
import {
  ReducerActionTypesObject,
  TReducerState,
  TWordleReducerActions,
} from '../types';

const wordleReducer = (
  state: TReducerState,
  action: TWordleReducerActions,
): TReducerState => {
  switch (action.type) {
    case ReducerActionTypesObject.TOGGLE_INSTRUCTIONS_MODAL_STATE:
      return {
        ...state,
        isIntructionsModalOpen: !state.isIntructionsModalOpen,
      };
    case ReducerActionTypesObject.TOGGLE_THEME:
      return {
        ...state,
        isDayThemeTurnedOn: !state.isDayThemeTurnedOn,
      };
    case ReducerActionTypesObject.START_GAME: {
      return {
        ...state,
        game: {
          ...state.game,
          wordToDiscover: action.payload.wordToDiscover,
          started: true,
        },
      };
    }
    case ReducerActionTypesObject.WRITE_ON_WORD_BUFFER: {
      return {
        ...state,
        game: {
          ...state.game,
          wordBuffer: action.payload.wordBuffer,
        },
      };
    }
    case ReducerActionTypesObject.DELETE_ON_WORD_BUFFER: {
      return {
        ...state,
        game: {
          ...state.game,
          wordBuffer: state.game.wordBuffer.slice(0, -1) || '',
        },
      };
    }
    case ReducerActionTypesObject.SUBMIT_WORD_BUFFER: {
      return {
        ...state,
        game: {
          ...state.game,
          wordBuffer: '',
          wordsInBoard: [...state.game.wordsInBoard, state.game.wordBuffer],
        },
      };
    }
    case ReducerActionTypesObject.TOGGLE_STATS_MODAL:
      return {
        ...state,
        isStatsModalOpen: !state.isStatsModalOpen,
      };
    case ReducerActionTypesObject.GAME_OVER:
      return {
        ...state,
        isStatsModalOpen: true,
        game: {
          ...state.game,
          wordBuffer: '',
          wordToDiscover: null,
          wordsInBoard: [],
          alreadyPlayedWords: [
            ...state.game.alreadyPlayedWords,
            state.game.wordToDiscover as string,
          ],
          started: false,
        },
        stats: [
          ...state.stats,
          state.game.wordToDiscover ===
          state.game.wordsInBoard[state.game.wordsInBoard.length - 1]
            ? 'WIN'
            : 'LOOSE',
        ],
      };
    default:
      return state;
  }
};

export default wordleReducer;
