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

    constructor(private starshipService: StarshipService) { }

    ngOnInit(): void {
        this.starshipService.getAll().subscribe(
            data => {
                this.starships = data.results;
            },
            err => {
                console.error(err);
            }
        );
    }

    seleccionarStarship(starship: IStarship) {
        console.log("entra", starship);
        this.starshipActual = starship;
    }

}
