import {Component, OnInit} from '@angular/core';
import {RepositoryService} from "../../services/repository.service";

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
  dogs: any[]
  constructor(private repository: RepositoryService) {
    this.initDogs();
  }

  ngOnInit(): void {
  }

  initDogs() {
    let sub = this.repository.getAllDogs('list');
    sub.subscribe(
      (resp: any) => {
        this.dogs = resp;
        console.log(this.dogs)
      }
    )
  }
}
