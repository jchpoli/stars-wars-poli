import { Component, OnInit } from '@angular/core';
import { SpecieService } from 'src/app/services/specie.service';
import { ISpecie } from 'src/app/models/ISpecie';

@Component({
    selector: 'app-specie-list',
    templateUrl: './specie-list.component.html',
    styleUrls: ['./specie-list.component.scss']
})
export class SpecieListComponent implements OnInit {

    public especies: ISpecie[];
    public searchName: string;
    public searchLanguage: string;
    public searchClassification: string;

    constructor(private specieService: SpecieService) { }

    ngOnInit(): void {
        this.specieService.getAll().subscribe(
            data => {
                this.especies = data.results;
            },
            err => {
                console.error(err);
            }
        );
    }

}
