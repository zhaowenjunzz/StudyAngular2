import {Component, OnInit, OnDestroy} from "@angular/core";
import {FormGroup, Validators, FormBuilder, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

import {IDynamicForm, MyDynamicForm} from "../interfaces/dynamic-form";
import CustomValidator from "../validators/custom-validators";

@Component({
    selector: "dynamic-form",
    templateUrl: "app/forms/component/dynamic-form.component.html",
    styleUrls: ["app/forms/component/simple-form.component.css"],
    directives: [REACTIVE_FORM_DIRECTIVES],
})
export default class DynamicFormComponent implements OnInit, OnDestroy {

    public myForm: FormGroup;

    public myModel: IDynamicForm;

    public codes: number[];

    public active: boolean;

    public debugInfo: string;

    public submitted: boolean;

    private formValueChangeSub: Subscription;

    constructor(private fb: FormBuilder) {
        this.buildForm();
    }

    public ngOnInit(): void {
        this.codes = [1, 2, 3, 4, 5];
        this.submitted = false;
        this.active = true;
    }

    public ngOnDestroy(): void {
        this.unsubscribeForm();
    }

    public onSubmit(): void {
        this.submitted = true;

        this.myModel.name = this.myForm.find("name").value;
    }

    public reset(): void {
        this.submitted = false;
        this.active = false;
        setTimeout(() => {
            this.buildForm();
            this.active = true;
        });
    }

    private buildForm(): void {
        this.unsubscribeForm();
        this.myModel = new MyDynamicForm("init Name", "");

        this.myForm = this.fb.group({
            name: ["", Validators.compose([Validators.required, CustomValidator.noZeroStart])],
            confirmName: ["", , Validators.composeAsync([CustomValidator.noSlashAsync])],
        }, { validator: CustomValidator.sameValue("name", "confirmName") });

        this.formValueChangeSub = this.myForm.valueChanges.subscribe(value => {
            this.debugInfo = JSON.stringify(value);
        });
    }

    private unsubscribeForm(): void {
        if (this.formValueChangeSub && !this.formValueChangeSub.isUnsubscribed) {
            this.formValueChangeSub.unsubscribe();
        }
    }
}
