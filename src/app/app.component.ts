import { Component } from '@angular/core';
import { optionsMenu } from './config/menu';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'stars-wars-poli';
    public optionsMenu = optionsMenu;
}
