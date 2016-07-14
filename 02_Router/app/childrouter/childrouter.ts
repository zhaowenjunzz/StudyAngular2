import SimpleRouterComponent from './component/simple-router.component';
import ChildCenterComponent from './component/route-center.component';
import CHILD_ROUTERS from './routers/child-router.routes';

const CHILD_ROUTER_DIRECTIVES:any[] = [
    SimpleRouterComponent,
    ChildCenterComponent,
];

export {
    CHILD_ROUTER_DIRECTIVES,
    CHILD_ROUTERS,

    ChildCenterComponent,

    SimpleRouterComponent,
};