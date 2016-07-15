import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";

import ILogInfo from "../interfaces/loginfo";
import LogLevel from "../enums/loglevel";

@Injectable()
export default class PageLogService {

    private _logSeed: Subscriber<ILogInfo>;
    private _observable: Observable<ILogInfo>;

    constructor() {
        this._observable = new Observable<ILogInfo>(subscriber => {
            this._logSeed = subscriber;
        });
    }

    public get logEventStream(): Observable<ILogInfo> {
        return this._observable;
    }

    public log(level: LogLevel, message: any): void {
        let info: ILogInfo = this.createLogInfo(level, message);
        this._logSeed.next(info);
        console.log(info.message);
    }

    public debug(message: any): void {
        this.log(LogLevel.DEBUG, message);
    }

    public info(message: any): void {
        this.log(LogLevel.INFO, message);
    }

    public warning(message: any): void {
        this.log(LogLevel.WARNING, message);
    }

    public error(message: any): void {
        this.log(LogLevel.ERROR, message);
    }

    private createLogInfo(level: LogLevel, message: any): ILogInfo {

        let isDebug: boolean;
        let isInfo: boolean;
        let isWarning: boolean;
        let isError: boolean;
        let levelDisp: string;

        switch (level) {
            case LogLevel.DEBUG:
                isDebug = true;
                levelDisp = "DEBUG";
                break;
            case LogLevel.INFO:
                isInfo = true;
                levelDisp = "INFO";
                break;
            case LogLevel.WARNING:
                isWarning = true;
                levelDisp = "WARNING";
                break;
            case LogLevel.ERROR:
                isError = true;
                levelDisp = "ERROR";
                break;

            default:
                isDebug = true;
                levelDisp = "DEBUG";
                break;
        }

        return {
            time: new Date(),
            level: level,
            message: message,
            isDebug: isDebug,
            isInfo: isInfo,
            isWarning: isWarning,
            isError: isError,
            levelDisplay: levelDisp,
        };
    }
};
