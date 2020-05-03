import { Component, OnInit, Input } from '@angular/core';
import { StarshipService } from 'src/app/services/starship.service';
import { IStarship } from 'src/app/models/IStarship';

@Component({
    selector: 'app-starship',
    templateUrl: './starship.component.html',
    styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

    @Input() public starship: IStarship;

    constructor(private starshipService: StarshipService) { }

    ngOnInit(): void {
    }

}
