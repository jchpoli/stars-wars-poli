import { Component, OnInit } from '@angular/core';
import { StarshipService } from 'src/app/services/starship.service';
import { IStarship } from 'src/app/models/IStarship';

@Component({
    selector: 'app-starship-list',
    templateUrl: './starship-list.component.html',
    styleUrls: ['./starship-list.component.scss']
})
export class StarshipListComponent implements OnInit {

    public starships: IStarship[];
    public starshipActual: IStarship;
    public searchName: string;
    public searchModel: string;
    public searchCost_in_credits: string;
    public searchPassengers: string;
    public imagenes:string[]=[];

    constructor(private starshipService: StarshipService) {
        for (let index = 1; index <=5; index++) {
            this.imagenes.push(`../../assets/images/nave${index}.jpg`);
        }
    }

    ngOnInit(): void {
        this.starshipService.getAll().subscribe(
            data => {
                this.starships = data.results;
                this.starships.forEach((el, ix) => {
                    el.img = this.imagenes[ix >= this.imagenes.length ? ix - this.imagenes.length : ix];
                });
            },
            err => {
                console.error(err);
            }
        );
    }

    seleccionarStarship(starship: IStarship) {
        this.starshipActual = starship;
    }

}
