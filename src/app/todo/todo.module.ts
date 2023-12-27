import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TodoComponent } from './todo.component';
import { MaterialModule } from '../shared/modules/material.module';
import { todoReducer } from './store/reducers/todo.reducer';
import { TodoAddComponent } from './components/todo-add/todo-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoProgressComponent } from './components/todo-progress/todo-progress.component';
import { FilterTodoByStatusPipe } from './pipes/filter-todo-by-status.pipe';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoFilterComponent } from './components/todo-filter/todo-filter.component';


@NgModule({
  declarations: [
    TodoComponent,
    TodoAddComponent,
    TodoProgressComponent,
    FilterTodoByStatusPipe,
    TodoListComponent,
    TodoItemComponent,
    TodoFilterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    StoreModule.forFeature('todos', todoReducer),
    ReactiveFormsModule,
    DragDropModule,
  ],
  exports: [
    TodoComponent
  ],
})
export class TodoModule { }
