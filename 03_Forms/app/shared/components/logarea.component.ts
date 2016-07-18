import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewChecked } from "@angular/core";
import {Subscription} from "rxjs";

import LogLevel from "../enums/loglevel";
import IlogInfo from "../interfaces/loginfo";
import PageLogService from "../services/pagelog.service";

@Component({
    selector: "study-logarea",
    templateUrl: "app/shared/components/logarea.component.html",
    styleUrls: ["app/shared/components/logarea.component.css"],
})
export default class LogAreaComponent implements OnInit, OnDestroy, AfterViewChecked {

    public logInfos: IlogInfo[];

    @ViewChild("scrollItem") private scrollItem: ElementRef;

    private _logSub: Subscription;

    constructor(
        private _pageLogService: PageLogService
    ) {
        this.logInfos = [];
    }

    public close(logInfo: IlogInfo): void {
        let index: number = this.logInfos.indexOf(logInfo);
        this.logInfos.splice(index, 1);
    }

    public clearAll(): void {
        this.logInfos.length = 0;
    }

    public clearDebug(): void {
        this.clearByLevel(LogLevel.DEBUG);
    }

    public clearInfo(): void {
        this.clearByLevel(LogLevel.INFO);
    }

    public clearWarning(): void {
        this.clearByLevel(LogLevel.WARNING);
    }

    public clearError(): void {
        this.clearByLevel(LogLevel.ERROR);
    }

    public ngOnInit(): void {
        this._logSub = this._pageLogService.logEventStream.subscribe(loginfo => {
            this.logInfos.push(loginfo);
        });
    }

    public ngOnDestroy(): void {
        this._logSub.unsubscribe();
    }

    public ngAfterViewChecked(): void {
        this.scrollToBottom();
    }

    private clearByLevel(level: LogLevel): void {
        let i = this.logInfos.length;
        while (i--) {
            if (this.logInfos[i].level === level) {
                this.logInfos.splice(i, 1);
            }
        }
    }

    private scrollToBottom(): void {
        this.scrollItem.nativeElement.scrollTop = this.scrollItem.nativeElement.scrollHeight;
    }
}
