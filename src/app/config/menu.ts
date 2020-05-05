import { DataOptionMenu } from '../models/data-option-menu';

import { FilmListComponent } from '../components/films/film-list/film-list.component';
import { FilmComponent } from '../components/films/film/film.component';
import { PeopleComponent } from '../components/people/people/people.component';
import { PlanetListComponent } from '../components/planets/planet-list/planet-list.component';
import { VehicleListComponent } from '../components/vehicles/vehicle-list/vehicle-list.component';
import { VehicleComponent } from '../components/vehicles/vehicle/vehicle.component';
import { StarshipListComponent } from '../components/starships/starship-list/starship-list.component';
import { SpecieListComponent } from '../components/species/specie-list/specie-list.component';

export const dataOptionsMenu: DataOptionMenu[] = [
    {
        path: "films",
        description: "Películas",
        component: FilmComponent
   },
    {
        path: "characters",
        description: "Personajes",
        component: PeopleComponent
    },
    {
        path: "planets",
        description: "Planetas",
        component: PlanetListComponent
    },
    {
        path: "vehicles",
        description: "Vehículos",
        component: VehicleComponent
    },
    {
        path: "starships",
        description: "Naves",
        component: StarshipListComponent
    },
    {
        path: "species",
        description: "Especies",
        component: SpecieListComponent
    }

];
