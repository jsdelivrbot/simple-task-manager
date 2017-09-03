import uuidv4 from 'uuid/v4';

import * as types from '../actions/types';

export const initialState = [];

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_TASK: {
      const { text, createdAt } = action;
      return [
        { id: uuidv4(), text, createdAt },
        ...state
      ];
    }
    case types.UPDATE_TASK: {
      const { id, text, updatedAt } = action;
      const taskIndex = state.findIndex(item => item.id === id);
      if (taskIndex < 0) {
        return state;
      }
      const task = state[taskIndex];
      return [
        ...state.slice(0, taskIndex),
        { ...task, text, updatedAt },
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
