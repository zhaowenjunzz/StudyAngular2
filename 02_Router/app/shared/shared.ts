import LogLevel from "./enums/loglevel";
import IlogInfo from "./interfaces/loginfo";
import PageLogService from "./services/pagelog.service";
import LogAreaComponent from "./components/logarea.component";

const SHARED_PROVIDERS: any[] = [
    PageLogService,
];

const SHARED_DIRECTIVES: any[] = [
    LogAreaComponent,
];

export {
LogLevel,
IlogInfo,

SHARED_PROVIDERS,

SHARED_DIRECTIVES,

PageLogService,
};
