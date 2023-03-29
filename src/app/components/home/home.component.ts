import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {interval, Observable} from "rxjs";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {RepositoryService} from "../../services/repository.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{

  homeForm: FormGroup
  subscription:any

  constructor(private repository: RepositoryService) {
  }
  ngOnInit(): void {
    this.homeForm = new FormGroup({
      dogName: new FormControl('Pippo', Validators.required),
      dogBreed: new FormControl(null, [Validators.required,Validators.pattern("[a-zA-Z]{4,}")]),
      crossOrPure: new FormControl(),
      description: new FormControl()
    })
  }

  ngOnDestroy(): void {
    this.subscription.destroy();
  }

  onSubmit() {
    console.log(this.homeForm)

    this.repository.addNewDog('save',
      {
        name: this.homeForm.value.dogName,
        breed: this.homeForm.value.dogBreed,
        description: this.homeForm.value.description,
        image: 'test',
        avatar: 'test',
        online: false
      }
    ).subscribe((response)=> {
      console.log(response)
    });
  }
}
