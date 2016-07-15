import SimpleRouterComponent from "./component/simple-router.component";
import ChildCenterComponent from "./component/route-center.component";
import CHILD_ROUTERS from "./routers/child-router.routes";
import {CanActivateGuard, CanDeactivateGuard, ICanComponentDeactivate} from "./routers/child-router-guards";

const CHILD_ROUTER_DIRECTIVES: any[] = [
    SimpleRouterComponent,
    ChildCenterComponent,
];

const CHILD_ROUTER_GUARDS: any[] = [
    CanActivateGuard,
    CanDeactivateGuard,
];

export {
CHILD_ROUTER_DIRECTIVES,
CHILD_ROUTERS,
CHILD_ROUTER_GUARDS,

ICanComponentDeactivate,

ChildCenterComponent,

SimpleRouterComponent,
};
