import LogLevel from "./enums/loglevel";
import IlogInfo from "./interfaces/loginfo";
import PageLogService from "./services/pagelog.service";
import LogAreaComponent from "./components/logarea.component";
import DialogComponent from "./components/dialog.component";
import DialogService from "./services/dialog.service";

const SHARED_PROVIDERS: any[] = [
    PageLogService,
    DialogService,
];

const SHARED_DIRECTIVES: any[] = [
    LogAreaComponent,
    DialogComponent,
];

export {
LogLevel,
IlogInfo,

SHARED_PROVIDERS,

SHARED_DIRECTIVES,

PageLogService,
DialogService,

LogAreaComponent,
DialogComponent,
};
