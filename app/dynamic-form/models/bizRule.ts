import {ValidationResponse} from "./validation.response";
import {Expression} from "./expression";
import {SyncValidator} from "./sync.validator";
import {AsyncValidator} from "./async.validator";

export class BizRule {
    showWhen:Expression; //nullable. // e.g isVisible() { return(previousInsurer==null) }
    validation:AsyncValidator|SyncValidator; //nullable.
    // help text will be shown if has-warning
    // each component will have a [class.hasWarning] = hasWarning(widget.validation.level==WARNING),
    //                            [class.hasError] = hasError(widget.validation.level==ERROR)   etc...
}

