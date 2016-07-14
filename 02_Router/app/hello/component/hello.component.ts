import {Component} from "@angular/core";

@Component({
    selector: 'study-hello',
    template: '<h1>{{greetings}}</h1>'
})
export default class HelloComponent {
    greetings: string = "Hello Angular!";
}