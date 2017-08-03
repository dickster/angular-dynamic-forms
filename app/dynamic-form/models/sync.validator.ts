import {Expression} from "./expression";

export class SyncValidator {
    content:Expression|Function;
    // if you want to override the msg you can supply your own here.
    private msgs:{[code:string]:string};
}
