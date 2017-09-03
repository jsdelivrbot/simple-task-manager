import * as types from './types';

export const createTask = text => ({ type: types.CREATE_TASK, text });

export const updateTask = (id, text) => ({ type: types.UPDATE_TASK, id, text });

export const deleteTask = id => ({ type: types.DELETE_TASK, id });
