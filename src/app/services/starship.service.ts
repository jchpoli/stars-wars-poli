import { Injectable } from '@angular/core';
import { HttpComun } from './commons/httpComun';
import { IStarship } from '../models/IStarship';

@Injectable({
    providedIn: 'root'
})
export class StarshipService extends HttpComun<IStarship> {
    private pathUrl: string = 'starships/';

    public getPathURL(): string {
        return this.pathUrl;
    }

}
