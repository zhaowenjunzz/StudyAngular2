import {RouterConfig, provideRouter} from '@angular/router';

import {HelloComponent} from './hello/hello';
import {CHILD_ROUTERS} from './childrouter/childrouter';

const routes: RouterConfig = [
    { path: 'hello', component: HelloComponent },
    { path: '', redirectTo: 'hello' , pathMatch:'full'},

    ...CHILD_ROUTERS,
];

const APP_ROUTER_PROVIDERS: any[] = [provideRouter(routes)];

export {

APP_ROUTER_PROVIDERS

};