import {AbstractControl, ValidatorFn, FormGroup} from "@angular/forms";
import {Observable, Subscriber, Subscription} from "rxjs/Rx";

interface IValidation {
    [key: string]: boolean;
}

export default class CustomValidator {

    public static noZeroStart(control: AbstractControl): IValidation {
        if ((control.value as string).startsWith("0")) {
            return { "noZeroStart": true };
        }
        return null;
    }

    public static sameValue(controlName1: string, controlName2: string): ValidatorFn {
        return (control: FormGroup): IValidation => {

            const value1 = control.controls[controlName1].value;
            const value2 = control.controls[controlName2].value;
            if (value1 !== value2) {
                return { sameValue: true };
            } else {
                return null;
            }
        };
    }

    public static noSlashAsync(control: AbstractControl): Observable<IValidation> {
        return new Observable<IValidation>(observer => {
            const o = observer as Subscriber<IValidation>;

            // here is an Angular2 bug when repeatly call async validator,it does run multiple times.
            // debounce is not work here.
            let s: Subscription = control.valueChanges.debounceTime(1000).subscribe(v => {
                const value = v as string;

                setTimeout(() => {
                    if (value.indexOf("/") !== -1) {
                        o.next({ noSlashAsync: true });
                    } else {
                        o.next(null);
                    }

                    // wait for bug update. maybe at final release.
                    console.log(v);

                    o.complete();
                    s.unsubscribe();
                }, 1000);
            });
        });
    }
}
