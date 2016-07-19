import {RouterConfig} from "@angular/router";
import FormsCenterComponent from "../component/forms-center.component";
import SimpleFormComponent from "../component/simple-form.component";
import DynamicFormComponent from "../component/dynamic-form.component";

const FORMS_ROUTERS: RouterConfig = [
    {
        path: "forms",
        component: FormsCenterComponent,
        children: [
            { path: "simple", component: SimpleFormComponent },
            { path: "dynamic", component: DynamicFormComponent },
        ],
    },
];

export default FORMS_ROUTERS;
