import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';
  d = new Date();
  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  month = this.months[this.d.getMonth()];
  date=this.d.getDate();
  days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  day=this.days[this.d.getDay()];
  year=this.d.getFullYear();
}
