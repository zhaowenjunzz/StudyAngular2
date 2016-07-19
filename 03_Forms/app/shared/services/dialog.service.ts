import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";

@Injectable()
export default class DialogService {

    private _dialogSeed: Observable<boolean>;

    private _dialogSubscriber: Subscriber<boolean>;

    constructor() {
        this._dialogSeed = new Observable<boolean>(observer => {
            this._dialogSubscriber = observer;
        });
    }

    get dialogOparationEvent() {
        return this._dialogSeed;
    }

    public showDialog(): void {
        this._dialogSubscriber.next(true);
    }

    public closeDialog(): void {
        this._dialogSubscriber.next(false);
    }
}
