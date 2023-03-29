import {Component, OnInit} from '@angular/core';
import {TestService} from "../../services/test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  dogs

  constructor(private testService: TestService) {
    this.dogs = testService.getDogs();
  }

  ngOnInit(): void {
  }
}
