import {RouterConfig, provideRouter} from "@angular/router";

import {HelloComponent} from "./hello/hello";
import {CHILD_ROUTERS, CHILD_ROUTER_GUARDS} from "./childrouter/childrouter";
import {FORMS_ROUTERS} from "./forms/forms";

const routes: RouterConfig = [
    { path: "hello", component: HelloComponent },
    { path: "", redirectTo: "hello", pathMatch: "full" },

    ...FORMS_ROUTERS,
    ...CHILD_ROUTERS,

    { path: "**", redirectTo: "hello" },

];

const APP_ROUTER_PROVIDERS: any[] = [provideRouter(routes), CHILD_ROUTER_GUARDS];

export {

APP_ROUTER_PROVIDERS

};
