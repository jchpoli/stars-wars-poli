import { Injectable } from '@angular/core';
import { HttpComun } from './commons/httpComun';
import { ISpecie } from '../models/ISpecie';

@Injectable({
  providedIn: 'root'
})
export class SpecieService extends HttpComun<ISpecie> {
    private pathUrl: string = 'species/';

    public getPathURL(): string {
        return this.pathUrl;
    }

}
