import {
  ReducerActionTypesObject,
  TReducerState,
  TWordleReducerActions,
} from '../types';

const wordleReducer = (
  state: TReducerState,
  action: TWordleReducerActions,
): TReducerState => {
  const { type } = action;
  switch (type) {
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
    default:
      return state;
  }
};

export default wordleReducer;
