import { Component, Injectable } from '@angular/core';
import {SPACESHIP_DIRECTIVES, SPACESHIP_PROVIDERS} from './spaceship/spaceship'

@Component({
    selector: 'spaceship-app',
    templateUrl: 'app/app.component.html',
    directives: [SPACESHIP_DIRECTIVES],
    providers: [SPACESHIP_PROVIDERS]
})
export default class AppComponent {
    constructor() { }
}

