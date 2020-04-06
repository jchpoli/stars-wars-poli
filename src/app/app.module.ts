import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FilmComponent } from './components/films/film/film.component';
import { PeopleComponent } from './components/people/people/people.component';
import { PlanetComponent } from './components/planets/planet/planet.component';
import { SpecieComponent } from './components/species/specie/specie.component';
import { StarshipComponent } from './components/starships/starship/starship.component';
import { VehicleComponent } from './components/vehicles/vehicle/vehicle.component';
import { VehicleListComponent } from './components/vehicles/vehicle-list/vehicle-list.component';
import { StarshipListComponent } from './components/starships/starship-list/starship-list.component';
import { SpecieListComponent } from './components/species/specie-list/specie-list.component';
import { PlanetListComponent } from './components/planets/planet-list/planet-list.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { FilmListComponent } from './components/films/film-list/film-list.component';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        FilmComponent,
        PeopleComponent,
        PlanetComponent,
        SpecieComponent,
        StarshipComponent,
        VehicleComponent,
        VehicleListComponent,
        StarshipListComponent,
        SpecieListComponent,
        PlanetListComponent,
        PeopleListComponent,
        FilmListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgBootstrapModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }