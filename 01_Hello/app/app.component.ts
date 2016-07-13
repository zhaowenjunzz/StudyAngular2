import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<h1>{{greeting}}</h1>'
})
export default class AppComponent {

    greeting:string;

    constructor() { 
        this.greeting = 'Hello Angular!';        
    }
}

