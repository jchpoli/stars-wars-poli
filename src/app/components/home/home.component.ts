import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imagesUrl;

  ngOnInit(): void {
     this.imagesUrl=['../../assets/images/PeliUno.jpg','../../assets/images/PeliDos.jpg','../../assets/images/PeliTres.jpg','../../assets/images/PeliCuatro.jpg','../../assets/images/PeliCinco.jpg','../../assets/images/PeliSeis.jpg',,'../../assets/images/PeliSiete.jpg'];
     var left = document.getElementsByClassName("overlay-left");
     var right = document.getElementsByClassName("overlay-right");
     left[0].classList.remove("overlay-left");
     right[0].classList.remove("overlay-right");
  }

}
