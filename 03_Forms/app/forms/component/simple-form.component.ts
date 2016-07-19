import {Component, OnInit} from "@angular/core";
import {ITemplateForm, MyTemplateForm} from "../interfaces/template-form";

@Component({
    selector: "simple-form",
    templateUrl: "app/forms/component/simple-form.component.html",
    styleUrls: ["app/forms/component/simple-form.component.css"],
})
export default class SimpleFormComponent implements OnInit {

    public myForm: ITemplateForm;

    public codes: number[];

    public active: boolean;

    private submitted: boolean;

    public ngOnInit(): void {
        this.codes = [1, 2, 3, 4, 5];
        this.myForm = new MyTemplateForm("", false, 1, "v1");
        this.submitted = false;
        this.active = true;
    }

    public onSubmit(): void {
        this.submitted = true;
    }

    public reset(): void {
        this.myForm = new MyTemplateForm("", false, 1, "v1");
        this.submitted = false;
        this.active = false;
        setTimeout(() => {
            this.active = true;
        }, 0);

    }
}
