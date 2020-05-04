import { Component, OnInit } from '@angular/core';
import {PlanetasService} from '../../../services/planetas.service';

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {

     planets = [];
  constructor(private planetas: PlanetasService) { }

  ngOnInit(): void {

       this.planetas.getAll()
            .subscribe(data_planetas => {
                 this.planets = data_planetas.results;
            }, error => {
                 console.error(error);
            })
  }

}
