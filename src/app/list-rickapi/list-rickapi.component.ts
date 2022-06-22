import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-list-rickapi',
  templateUrl: './list-rickapi.component.html',
  styleUrls: ['./list-rickapi.component.css']
})
export class ListRickapiComponent implements OnInit {
  affichage:string = '<img alt="" src="">';
  constructor(  private user:UserService
  ) {
  ;
  };
  page:number=0;
  compteurs:number = 0;
  compteursfin:number=0;
  pagination: number = 1;
  ngOnInit(): void {
  }
  rechercherpage() {
 console.log("test"+this.pagination)
    if (this.pagination<1){
      this.pagination=1;
    }

    this.compteurs = (this.pagination-1)*50;
    this.compteursfin=this.compteurs+50;
    this.affichage='';

    while (this.compteurs != this.compteursfin)
    {
      if(this.compteurs >= 826){
        this.compteurs=776;
        this.compteursfin=826;
      }
      this.compteurs=this.compteurs+1
      this.affichage=this.affichage+'<button onclick="selectiondepersonnage(this.compteurs)"><img alt="" src="https://rickandmortyapi.com/api/character/avatar/'+this.compteurs+'.jpeg"></button>';
      console.log(this.compteurs)
      // @ts-ignore
      document.getElementById("affichageboutons").innerHTML = this.affichage;  }
  }


  selectiondepersonnage(event:number) {
    console.log(event)
    //Mettre ici les méthode get
    //J'ai un problème avec mes boutons... j'aurais essayé


  }
}
export function idpersonnage(this: any){
  return this.pagination
}
