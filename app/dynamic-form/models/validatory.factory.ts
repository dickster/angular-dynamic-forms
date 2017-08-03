
import {Validators, ValidatorFn} from "@angular/forms";
import {Injectable} from "@angular/core";

@Injectable()
export class ValidatorFactory {

    create(name:string, args:string[]) : ValidatorFn {
        switch (name) {
            case 'required':
                return Validators.required;
            case 'min':
                var min : any = args && args.length>0 ? args[0] : 100;
                return Validators.minLength(<number>min);
            case 'max':
                var max : any = args && args.length>0 ? args[0] : 100;
                return Validators.maxLength(<number>max);
            default:
                throw "illegal validator : [" + name + "] not supported";
        }
    }
}
