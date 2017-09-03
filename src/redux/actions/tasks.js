import * as types from './types';

export const createTask = text => ({ type: types.CREATE_TASK, text, createdAt: new Date().toISOString() });

export const updateTask = (id, text) => ({ type: types.UPDATE_TASK, id, text, updatedAt: new Date().toISOString() });

export const deleteTask = id => ({ type: types.DELETE_TASK, id });
