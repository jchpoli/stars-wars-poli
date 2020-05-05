import { Component, OnInit } from '@angular/core';
import {PlanetasService} from '../../../services/planetas.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {

     planets = [];
     public searchClimate: string;
     public searchDiameter: string;
     public searchTerrain: string;
     public searchName: string;
  constructor(private planetas: PlanetasService,private route: ActivatedRoute) { }

  ngOnInit(): void {

       this.planetas.getAll()
            .subscribe(data_planetas => {
                 this.planets = data_planetas.results;
            }, error => {
                 console.error(error);
            })
  }

}
