import { Pipe, PipeTransform } from '@angular/core';
import { TodoItem, TodoStatus } from '../store/reducers/todo.reducer';

@Pipe({
  name: 'filterTodoByStatus',
  pure: true,
})
export class FilterTodoByStatusPipe implements PipeTransform {
  transform(todos: TodoItem[], status: TodoStatus): TodoItem[] {
    return todos.filter(todo => todo.status === status);
  }
}
