import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { dataOptionsMenu } from './config/menu';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
    ...dataOptionsMenu,
    {
        path: '',
        redirectTo: `/films`,
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
