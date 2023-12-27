import { createReducer, on } from '@ngrx/store';
import * as TodoActions from '../actions/todo.actions';

export enum TodoStatus {
  InProgress = 'inProgress',
  Postponed = 'postponed',
  Completed = 'completed'
}

export interface TodoItem {
  id: string;
  name: string;
  status: TodoStatus;
  date: Date;
}

export interface TodoState {
  todos: TodoItem[];
}

export const initialState: TodoState = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,
  on(TodoActions.addTodo, (state, { todo }) => {
    return {
    ...state,
    todos: [...state.todos, {
      name: todo,
      id: Date.now().toString(),
      status: TodoStatus.InProgress,
      date: new Date()
    }]
  }}),
  on(TodoActions.deleteTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  on(TodoActions.updateTodo, (state, { id, status }) => ({
    ...state,
    todos: state.todos.map(todo => 
      todo.id === id ? { ...todo, status } : todo
    )
  })),
  on(TodoActions.resetTodos, (state) => ({
    ...state,
    todos: state.todos.map(todo => ({ ...todo, status: TodoStatus.InProgress }))
  })),
  on(TodoActions.deleteTodos, (state) => ({
    ...state,
    todos: [],
  })),
);
