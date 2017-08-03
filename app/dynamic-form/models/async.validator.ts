import {ValidationResponse} from "./validation.response";
import {Endpoint} from "./endpoint";
import {Expression} from "./expression";

// maybe i should make this implement Validator???

export class AsyncValidator extends Endpoint {
    private msgs:{[code:string]:string};  // nullable.
    private expression:Expression;

    constructor(name:string,msgs:{[code:string]:string},parameters?:string[],base?:string,expression?:Expression) {
        super(name, parameters, base);
        this.msgs = msgs;
        this.expression = expression;
    }

    // fold this into RestService class so they both exist at once.

    // these are all called on blur and have an optional condition.
    // e.g. validate vehicle only if type==TRUCK.
}

