import { Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: "study-menu",
    templateUrl: "app/menu/component/menu.component.html",
    directives: [ROUTER_DIRECTIVES],
})
export default class MenuComponent { };
