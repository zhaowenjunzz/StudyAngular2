import {RouterConfig} from "@angular/router";

import SimpleRouterComponent from "../component/simple-router.component";
import ChildCenterComponent from "../component/route-center.component";
import {CanActivateGuard, CanDeactivateGuard} from "./child-router-guards";

const CHILD_ROUTERS: RouterConfig = [
    {
        path: "router",
        component: ChildCenterComponent,
        children: [
            { path: "simple", component: SimpleRouterComponent },
            {
                path: "simple/:id",
                component: SimpleRouterComponent,
                canActivate: [CanActivateGuard],
                canDeactivate: [CanDeactivateGuard],
            },
        ],
    },
];

export default CHILD_ROUTERS;
