import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demoProject';
}
