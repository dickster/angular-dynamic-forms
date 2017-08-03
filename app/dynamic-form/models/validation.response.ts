
import {ValidationLevel} from "./validation.level";
import {StateService} from "../services/work.service";

export class ValidationResponse {
    // TODO :ensure that all (client & serverside) validators follow this convention for responses.
    level: ValidationLevel;
    code: number;
    msg: string;
    user:string;
    time:number;
    content:any;
    isValid:boolean;
    // data:any....needed?
}


