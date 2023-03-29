import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {RepositoryService} from "../../services/repository.service";

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.scss']
})
export class DogDetailComponent implements OnInit {

  id: number
  dog: any

  constructor(private activeRoute: ActivatedRoute, private repository: RepositoryService) {
  }

  ngOnInit(): void {
    let sub = this.activeRoute.paramMap;
    console.log(sub);
    sub.subscribe(
      (params: ParamMap) => {
        this.id = +params.get('id')!;
        console.log('Perrito con id ' + this.id);
        this.repository.getDog(this.id).subscribe(
          (resp: any) => {
            this.dog = resp;
          }
        );
      }
    )
  }


}
