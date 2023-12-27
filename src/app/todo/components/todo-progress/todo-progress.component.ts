import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-progress',
  templateUrl: './todo-progress.component.html',
  styleUrls: ['./todo-progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoProgressComponent {
  @Input() completedPercentage: number = 0;
  @Input() postponedPercentage: number = 0;
}
