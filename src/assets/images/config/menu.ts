import { DataOptionMenu } from '../models/data-option-menu';

import { FilmListComponent } from '../components/films/film-list/film-list.component';
import { PeopleListComponent } from '../components/people/people-list/people-list.component';
import { PlanetListComponent } from '../components/planets/planet-list/planet-list.component';
import { VehicleListComponent } from '../components/vehicles/vehicle-list/vehicle-list.component';
import { StarshipListComponent } from '../components/starships/starship-list/starship-list.component';
import { SpecieListComponent } from '../components/species/specie-list/specie-list.component';

export const dataOptionsMenu: DataOptionMenu[] = [
    {
        path: "films",
        description: "Películas",
        component: FilmListComponent
   },
    {
        path: "characters",
        description: "Personajes",
        component: PeopleListComponent
    },
    {
        path: "planets",
        description: "Planetas",
        component: PlanetListComponent
    },
    {
        path: "vehicles",
        description: "Vehículos",
        component: VehicleListComponent
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
