import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { dataOptionsMenu } from './config/menu';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FilmComponent } from './components/films/film/film.component';
import { PeopleComponent } from './components/people/people/people.component';
import { PlanetComponent } from './components/planets/planet/planet.component';
import { VehicleComponent } from './components/vehicles/vehicle/vehicle.component';
import { StarshipComponent } from './components/starships/starship/starship.component';
import { SpecieComponent } from './components/species/specie/specie.component';
import {HomeComponent} from './components/home/home.component';
const routes: Routes = [
    ...dataOptionsMenu,
    {
        path:"home",
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
