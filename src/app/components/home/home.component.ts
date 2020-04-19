import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imagesUrl;

  ngOnInit(): void {
     this.imagesUrl=['../../assets/PeliUno.jpg','../../assets/PeliDos.jpg','../../assets/PeliTres.jpg','../../assets/PeliCuatro.jpg','../../assets/PeliCinco.jpg','../../assets/PeliSeis.jpg',,'../../assets/PeliSiete.jpg'];
  }

}
