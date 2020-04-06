import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FilmListComponent } from './components/films/film-list/film-list.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { PlanetListComponent } from './components/planets/planet-list/planet-list.component';
import { VehicleListComponent } from './components/vehicles/vehicle-list/vehicle-list.component';
import { StarshipListComponent } from './components/starships/starship-list/starship-list.component';
import { SpecieListComponent } from './components/species/specie-list/specie-list.component';

const routes: Routes = [
    {
        path: "films",
        component: FilmListComponent
    },
    {
        path: "characters",
        component: PeopleListComponent
    },
    {
        path: "planets",
        component: PlanetListComponent
    },
    {
        path: "vehicles",
        component: VehicleListComponent
    },
    {
        path: "starships",
        component: StarshipListComponent
    },
    {
        path: "species",
        component: SpecieListComponent
    },
    {
        path: '',
        redirectTo: '/films',
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
