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
    default:
      return state;
  }
};

export default wordleReducer;
