import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {

  constructor(private http: HttpClient) { }
  filter: any = ""
  /*
   * Metodo que obtiene los nuevos lanzamientos
   */
  public getNewRelease() {

    /*this.query = 'browse/new-releases?limit=20';*/
    this.filter = '';
    return this.getQuery();

  }

  /*
   * Metodo que obtiene el artista
   */
  public getPelicula(termino: number) {

    /*this.query = `search?q=${termino}&type=artist&limit=20`;*/
    this.filter = termino;
    console.log('https://swapi.dev/api/species/')
    return this.getQuery();

  }

  /*
   * Ejecuta el servicio segun parametros
   */
  private getQuery() {

    /*this.token = "BQBwb-5enrcduvRO9ZU6hHxWWtFYwE0v6x9QH393ukwlhkIv-Zg0P74qmV7QyA9TAHIbxVudzzgEp1Dppfw";
    const headers = new HttpHeaders({
      "Authorization": 'Bearer ' + this.token
    });*/
    return this.http.get('https://swapi.dev/api/species/').pipe(map(data => data));
  }
}