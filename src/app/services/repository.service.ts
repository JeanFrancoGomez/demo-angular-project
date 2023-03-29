import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  urlBase='http://localhost:8080/dog/';

  constructor(private httpClient: HttpClient) { }

  addNewDog(url: string, body: {}){
    return this.httpClient.post(this.urlBase+url,body);
  }

  getAllDogs(url:string){
    return this.httpClient.get(this.urlBase+url);
  }

  getDog(id: number) {
    return this.httpClient.get(this.urlBase+id);
  }
}
