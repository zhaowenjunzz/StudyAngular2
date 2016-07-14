import { Component } from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {HELLO_DIRECTIVES} from "./hello/hello";
import {CHILD_ROUTER_DIRECTIVES} from "./childrouter/childrouter";
import {MENU_DIRECTIVES} from "./menu/menu";

@Component({
    selector: "study-angular-app",
    templateUrl: "app/app.component.html",
    styleUrls: ["app/app.component.css"],
    directives: [ROUTER_DIRECTIVES, HELLO_DIRECTIVES, CHILD_ROUTER_DIRECTIVES, MENU_DIRECTIVES],
    precompile: [HELLO_DIRECTIVES, CHILD_ROUTER_DIRECTIVES],
})
export default class AppComponent { }
