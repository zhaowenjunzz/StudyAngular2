import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";

import IDialogShowEventArg from "../interfaces/dialogShowEventArg";
import IDialogPostEventArg from "../interfaces/dialogPostEventArg";

@Injectable()
export default class DialogService {

    private _dialogShowSeed: Observable<IDialogShowEventArg>;

    private _dialogShowSubscriber: Subscriber<IDialogShowEventArg>;

    private _dialogPostSeed: Observable<IDialogPostEventArg>;

    private _dialogPostSubcriber: Subscriber<IDialogPostEventArg>;

    constructor() {
        this._dialogShowSeed = new Observable<IDialogShowEventArg>(observer => {
            this._dialogShowSubscriber = observer;
        });
    }

    get dialogShowEvent() {
        return this._dialogShowSeed;
    }

    public showDialog(param: IDialogShowEventArg): Observable<IDialogPostEventArg> {

        const {
            header = "Default Header",
            bodyDescription = "Default Body Description",
            confirmButtonText = "OK",
            cancelButtonText = "Cancel",
            useConfirm = true,
            useCancel = false,
        } = param;

        this._dialogShowSubscriber.next({
            header: header,
            bodyDescription: bodyDescription,
            confirmButtonText: confirmButtonText,
            cancelButtonText: cancelButtonText,
            useConfirm: useConfirm,
            useCancel: useCancel,
        });

        this._dialogPostSeed = new Observable<IDialogPostEventArg>(observer => {
            this._dialogPostSubcriber = observer;
        });

        return this._dialogPostSeed;
    }

    public confirmDialog(): void {
        this._dialogPostSubcriber.next({ eventType: "confirm" });
        this._dialogPostSubcriber.complete();
    }

    public cancelDialog(): void {
        this._dialogPostSubcriber.next({ eventType: "cancel" });
        this._dialogPostSubcriber.complete();
    }
}
