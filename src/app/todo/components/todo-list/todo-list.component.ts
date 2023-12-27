import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TodoItem, TodoStatus } from '../../store/reducers/todo.reducer';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() todos: TodoItem[] = [];
  @Output() todoStatusChange = new EventEmitter<{ todo: TodoItem, newStatus: TodoStatus }>();
  public todoStatus: typeof TodoStatus = TodoStatus;

  public trackById(index: number, item: TodoItem): string {
    return item.id;
  }
}
