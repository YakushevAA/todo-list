import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public currentDate: Date;

  constructor() {}

  ngOnInit() {
    this.currentDate = new Date();
  }
}
