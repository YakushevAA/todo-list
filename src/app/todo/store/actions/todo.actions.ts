import { createAction, props } from '@ngrx/store';
import { TodoStatus } from '../reducers/todo.reducer';

export const addTodo = createAction('[Todo Page] Add Todo', props<{ todo: string }>());
export const deleteTodo = createAction('[Todo Page] Delete Todo', props<{ id: string }>());
export const updateTodo = createAction('[Todo Page] Postpone Todo', props<{ id: string, status: TodoStatus }>());
export const resetTodos = createAction('[Todo Page] Reset Todos');
export const deleteTodos = createAction('[Todo Page] Delete Todos');
