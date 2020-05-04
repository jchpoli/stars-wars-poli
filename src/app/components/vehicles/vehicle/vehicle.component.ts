import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IVehicles } from 'src/app/models/IVehicles';
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  vehiculos;
  selectVehiculo: IVehicles;
  apiResponse;
  searchNombre;
  searchModelo;
  searchPasajeros;
  imagenes = ["../../assets/images/Vehiculo1.jpg","../../assets/images/Vehiculo2.jpg","../../assets/images/Vehiculo3.jpg","../../assets/images/Vehiculo4.jpg","../../assets/images/Vehiculo5.jpg","../../assets/images/Vehiculo6.jpg","../../assets/images/Vehiculo7.jpg","../../assets/images/Vehiculo8.jpg","../../assets/images/Vehiculo9.jpg","../../assets/images/Vehiculo10.jpg"];

  async ngOnInit() {
    this.apiResponse = await this.httpClient.get('https://swapi.dev/api/vehicles/').toPromise();
    this.vehiculos=this.apiResponse.results;
    for (let i = 0; i < this.vehiculos.length; i++) {
      this.vehiculos[i].img=this.imagenes[i];

    }
    console.log(this.vehiculos);

  }

  detalleVehiculo(vehiculoClick : IVehicles){
    this.selectVehiculo= vehiculoClick;
  }




}
