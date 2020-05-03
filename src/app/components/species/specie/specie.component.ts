import { Component, OnInit } from '@angular/core';
import { SpecieService } from 'src/app/services/specie.service';
import { ISpecie } from 'src/app/models/ISpecie';

@Component({
    selector: 'app-specie',
    templateUrl: './specie.component.html',
    styleUrls: ['./specie.component.scss']
})
export class SpecieComponent implements OnInit {
    public especie: ISpecie;

    constructor(private specieService: SpecieService) {}

    ngOnInit(): void {
        this.specieService.getUnique('9').subscribe(
            data => {
                this.especie = data;
            },
            err => {
                console.error(err);
            }
        );
    }

}
