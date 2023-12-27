import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItem, TodoStatus } from './store/reducers/todo.reducer';
import * as TodoActions from './store/actions/todo.actions';
import { selectAllTodos } from './store/selectors/todo.selectors';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public filter$ = new BehaviorSubject<string>('');
  public currentDate: Date;
  public todos$: Observable<{
    todos: TodoItem[];
    completedPercentage: number;
    postponedPercentage: number;
  }>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.todos$ = combineLatest([
      this.store.select(selectAllTodos),
      this.filter$
    ]).pipe(
      map(([todos, filter]) => {
        const filteredTodos = todos.filter(todo => todo.name.toLowerCase().includes(filter.toLowerCase()));
        const totalTodos = todos.length;
        const completedTodos = todos.filter(todo => todo.status === TodoStatus.Completed).length;
        const postponedTodos = todos.filter(todo => todo.status === TodoStatus.Postponed).length;
        const completedPercentage = totalTodos ? (completedTodos / totalTodos) * 100 : 0;
        const postponedPercentage = totalTodos ? (postponedTodos / totalTodos) * 100 : 0;
        return { todos: filteredTodos, completedPercentage, postponedPercentage };
      })
    );
    this.currentDate = new Date();
  }

  public handleTodoStatusChange(event: { id: TodoItem['id'], newStatus: TodoStatus }): void {
    this.store.dispatch(TodoActions.updateTodo({ id: event.id, status: event.newStatus }));
  }

  public resetProgress(): void {
    this.store.dispatch(TodoActions.resetTodos());
  }

  public handleFilterUpdate(filter: string): void {
    this.filter$.next(filter);
  }

  public deleteAll(): void {
    this.store.dispatch(TodoActions.deleteTodos());
  }
}
