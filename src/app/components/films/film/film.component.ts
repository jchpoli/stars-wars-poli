import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  // peliculas = [{
  //   nombre:"chapzo",
  //   productores:"machote",
  //   lanzamiento:"hoyxd",
  //   director:"micola"
  // },
  // {
  //   nombre:"chapzo2",
  //   productores:"machote2",
  //   lanzamiento:"hoyxd",
  //   director:"micola"
  // }];
  peliculas;
  apiResponse;
  searchNombre;
  searchProductor;
  searchLanzamiento;
  searchDirector;
  async ngOnInit() {
    this.apiResponse = await this.httpClient.get('https://swapi.dev/api/films/').toPromise();
    this.peliculas=this.apiResponse.results;
    console.log(this.peliculas);
  }

}
