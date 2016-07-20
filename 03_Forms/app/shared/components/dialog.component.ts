import {Component, OnInit, OnDestroy} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import DialogService from "../services/dialog.service";
import IDialogShowEventArg from "../interfaces/dialogShowEventArg";

@Component({
    selector: "study-dialog",
    templateUrl: "app/shared/components/dialog.component.html",
})
export default class DialogComponent implements OnInit, OnDestroy {

    public show: boolean = false;

    public showConfig: IDialogShowEventArg;

    private _dialogSub: Subscription;

    constructor(private _dialogService: DialogService) {

    }

    public cancelDialog(): void {
        this._dialogService.cancelDialog();
        this.toggleState(false);
    }

    public confirmDialog(): void {
        this._dialogService.confirmDialog();
        this.toggleState(false);
    }

    public ngOnInit(): void {
        this._dialogSub = this._dialogService.dialogShowEvent.subscribe(value => {
            this.showConfig = value;
            this.toggleState(true);
        });
    }

    public ngOnDestroy(): void {
        this._dialogSub.unsubscribe();
    }

    private toggleState(state: boolean) {
        this.show = state;
    }
}
