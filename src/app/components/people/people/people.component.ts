import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IPeople } from 'src/app/models/IPeople';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  personajes;
  selectPeople: IPeople;
  apiResponse;
  searchNombre;
  searchGenero;
  searchEstatura;
  searchPeso;
  searchFechaCreacion;
  imagenes = ["../../assets/images/Vehiculo1.jpg","../../assets/images/Vehiculo2.jpg","../../assets/images/Vehiculo3.jpg","../../assets/images/Vehiculo4.jpg","../../assets/images/Vehiculo5.jpg","../../assets/images/Vehiculo6.jpg","../../assets/images/Vehiculo7.jpg","../../assets/images/Vehiculo8.jpg","../../assets/images/Vehiculo9.jpg","../../assets/images/Vehiculo10.jpg"];

  async ngOnInit() {
    this.apiResponse = await this.httpClient.get('https://swapi.dev/api/people/').toPromise();
    this.personajes=this.apiResponse.results;
    for (let i = 0; i < this.personajes.length; i++) {
      this.personajes[i].img=this.imagenes[i];

    }
    console.log(this.personajes);

  }

  verPersonaje(personajeClick : IPeople){
    this.selectPeople= personajeClick;
  }




}
