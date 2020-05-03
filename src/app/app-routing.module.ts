import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { dataOptionsMenu } from './config/menu';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StarshipComponent } from './components/starships/starship/starship.component';
import {HomeComponent} from './components/home/home.component';
const routes: Routes = [
    ...dataOptionsMenu,
    {
        path: "starships/:id",
        component: StarshipComponent
    },
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
