import uuidv4 from 'uuid/v4';

import * as types from '../actions/types';

export const initialState = [];

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_TASK: {
      const text = action.text;
      return [
        { id: uuidv4(), text },
        ...state
      ];
    }
    case types.UPDATE_TASK: {
      const id = action.id;
      const text = action.text;
      const taskIndex = state.findIndex(item => item.id === id);
      if (taskIndex < 0) {
        return state;
      }
      return [
        ...state.slice(0, taskIndex),
        { id, text },
        ...state.slice(taskIndex + 1)
      ];
    }
    case types.DELETE_TASK: {
      const id = action.id;
      const taskIndex = state.findIndex(item => item.id === id);
      if (taskIndex < 0) {
        return state;
      }
      return [...state.slice(0, taskIndex), ...state.slice(taskIndex + 1)];
    }
    default:
      return state;
  }
}
