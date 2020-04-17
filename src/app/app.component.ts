import { Component } from '@angular/core';
import { dataOptionsMenu } from './config/menu';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public optionsMenu = dataOptionsMenu;
}
