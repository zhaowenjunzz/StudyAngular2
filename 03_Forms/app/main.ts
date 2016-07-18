import { bootstrap } from "@angular/platform-browser-dynamic";
import AppComponent from "./app.component";
import { disableDeprecatedForms, provideForms } from "@angular/forms";
import {APP_ROUTER_PROVIDERS} from "./app.routes";

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(), provideForms(),
]);
