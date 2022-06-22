import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {idpersonnage} from './list-rickapi/list-rickapi.component'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getData(){
    let url='https://rickandmortyapi.com/api/character/'+idpersonnage();
    return this.http.get(url);
  }
}
