import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IFilms } from 'src/app/models/IFilms';
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  peliculas;
  peliculaSeleccionada: IFilms;
  apiResponse;
  searchNombre;
  searchProductor;
  searchLanzamiento;
  searchDirector;
  imagenes = ["../../assets/images/PeliUno.jpg","../../assets/images/PeliDos.jpg","../../assets/images/PeliTres.jpg","../../assets/images/PeliCuatro.jpg","../../assets/images/PeliCinco.jpg","../../assets/images/PeliSeis.jpg"];

  async ngOnInit() {
    this.apiResponse = await this.httpClient.get('https://swapi.dev/api/films/').toPromise();
    this.peliculas=this.apiResponse.results;
    for (let i = 0; i < this.peliculas.length; i++) {
      this.peliculas[i].img=this.imagenes[i];
      
    }
    console.log(this.peliculas);

  }

  detallePelicula(peliculaSeleccionada : IFilms){
    this.peliculaSeleccionada= peliculaSeleccionada;
    console.log("hola gente asustado?");
  }




}
