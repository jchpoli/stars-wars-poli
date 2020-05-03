import { Component, OnInit } from '@angular/core';
import {StarWarsService} from 'src/app/services/especies.service';

@Component({
  selector: 'app-specie-list',
  templateUrl: './specie-list.component.html',
  styleUrls: ['./specie-list.component.scss']
})
export class SpecieListComponent implements OnInit {
  
  Especies: any[] = [];
  show: boolean = false
  constructor(private starWars: StarWarsService) {
    

    this.starWars.getNewRelease().subscribe((data: any) => {
      this.Especies = data.results;
      console.log(data.results);
    });
  }

  ngOnInit(): void {
  }

}
