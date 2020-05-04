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
        this.starshipActual = starship;
    }

}
