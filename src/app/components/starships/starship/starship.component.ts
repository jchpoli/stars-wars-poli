import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { StarshipService } from 'src/app/services/starship.service';
import { IStarship } from 'src/app/models/IStarship';


@Component({
    selector: 'app-starship',
    templateUrl: './starship.component.html',
    styleUrls: ['./starship.component.scss']
})
export class StarshipComponent implements OnInit {

    @Input() public starship: IStarship;

    constructor(private starshipService: StarshipService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        if (!this.starship) {
            this.route.paramMap.pipe(
                switchMap(params => {
                    return this.starshipService.getUnique(params.get('id'));
                })
            ).subscribe(
                data => {
                    this.starship = data;
                }
            );
        }
    }

}
