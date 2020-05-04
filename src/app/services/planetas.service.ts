import { Injectable } from '@angular/core';
import {HttpComun} from './commons/httpComun';
import {ISpecie} from '../models/ISpecie';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService extends HttpComun<ISpecie>  {

     private pathUrl: string = 'planets/';

     public getPathURL(): string {
          return this.pathUrl;
     }
}
