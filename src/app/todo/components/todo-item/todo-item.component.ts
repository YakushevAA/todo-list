import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoItem, TodoStatus } from '../../store/reducers/todo.reducer';
import * as TodoActions from '../../store/actions/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() item: TodoItem;
  public todoStatus: typeof TodoStatus = TodoStatus;

  constructor(private store: Store) { }

  public updateItem(newStatus: TodoStatus): void {
    this.store.dispatch(TodoActions.updateTodo({ id: this.item.id, status: newStatus }));
  };

  public deleteItem(): void {
    this.store.dispatch(TodoActions.deleteTodo({ id: this.item.id }));
  };

}
