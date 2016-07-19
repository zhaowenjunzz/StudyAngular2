import {Component, OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import DialogService from "../services/dialog.service";

@Component({
    selector: "study-dialog",
    templateUrl: "app/shared/components/dialog.component.html",
})
export default class DialogComponent implements OnInit, OnDestroy {

    public show: boolean = false;

    private _dialogSub: Subscription;

    constructor(private _dialogService: DialogService) {

    }

    public closeDialog(): void {
        this.toggleState(false);
    }

    public showDialog(): void {
        this.toggleState(true);
    }

    public ngOnInit(): void {
        this._dialogSub = this._dialogService.dialogOparationEvent.subscribe(value => {
            this.toggleState(value);
        });
    }

    public ngOnDestroy(): void {
        this._dialogSub.unsubscribe();
    }

    private toggleState(state: boolean) {
        this.show = state;
    }
}
