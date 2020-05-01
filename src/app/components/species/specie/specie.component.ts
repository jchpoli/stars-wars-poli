import { Component, OnInit } from '@angular/core';
import {StarWarsService} from 'src/app/servicios/especies.service';

@Component({
  selector: 'app-specie',
  templateUrl: './specie.component.html',
  styleUrls: ['./specie.component.scss']
})
export class SpecieComponent implements OnInit {

  constructor(private starWars: StarWarsService) {
    alert(1)
    this.starWars.getNewRelease().subscribe((data: any) => {
      console.log(data.results);
    });
  }

  ngOnInit(): void {
  }

}
