import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTodo } from '../../store/actions/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoAddComponent {
  public todoForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.todoForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  public addTodo(): void {
    if (this.todoForm.valid) {
      this.store.dispatch(addTodo({todo: this.todoForm.value.name}));
      this.todoForm.reset();
      this.todoForm.get('name')?.setErrors(null);
    }
  }
}
