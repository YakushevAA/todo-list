import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { TodoItem, TodoStatus } from '../../store/reducers/todo.reducer';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() todos: TodoItem[] = [];
  @Output() todoStatusChange = new EventEmitter<{ id: TodoItem['id'], newStatus: TodoStatus }>();
  public todoStatus: typeof TodoStatus = TodoStatus;

  public trackById(index: number, item: TodoItem): string {
    return item.id;
  }

  public drop(event: CdkDragDrop<TodoItem[]>) {
    if (event.previousContainer !== event.container) {
      this.todoStatusChange.emit({
        id: event.previousContainer.data[event.previousIndex]['id'],
        newStatus: event.container.id as TodoStatus}
      );
    }
  }
}
