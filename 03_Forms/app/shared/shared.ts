import LogLevel from "./enums/loglevel";
import IlogInfo from "./interfaces/loginfo";
import IDialogShowEventArg from "./interfaces/dialogShowEventArg";
import IDialogPostEventArg from "./interfaces/dialogPostEventArg";
import PageLogService from "./services/pagelog.service";
import LogAreaComponent from "./components/logarea.component";
import DialogComponent from "./components/dialog.component";
import DialogService from "./services/dialog.service";
import SimpleTooltipDirective from "./directives/simple-tooltip.directive";

const SHARED_PROVIDERS: any[] = [
    PageLogService,
    DialogService,
];

const SHARED_DIRECTIVES: any[] = [
    LogAreaComponent,
    DialogComponent,
    SimpleTooltipDirective,
];

export {
LogLevel,
IlogInfo,
IDialogShowEventArg,
IDialogPostEventArg,

SHARED_PROVIDERS,

SHARED_DIRECTIVES,

PageLogService,
DialogService,

LogAreaComponent,
DialogComponent,
SimpleTooltipDirective,
};
