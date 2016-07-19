import FormsCenterComponent from "./component/forms-center.component";
import SimpleFormComponent from "./component/simple-form.component";
import DynamicFormComponent from "./component/dynamic-form.component";
import FORMS_ROUTERS from "./routers/forms.routes";

const FORMS_DIRECTIVES: any[] = [
    FormsCenterComponent,
    SimpleFormComponent,
    DynamicFormComponent,
];

export {
FORMS_DIRECTIVES,
FORMS_ROUTERS,

FormsCenterComponent,
SimpleFormComponent,
DynamicFormComponent,
};
