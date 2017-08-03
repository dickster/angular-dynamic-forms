
// i should just write my own expression parser here (for security reasons mostly)
// but i'll just use eval now to handle this.

export class Expression {
    text:string;             // e.g.  first=='JOHN'
    normalizedText:string;   // e.g.  name.first=='JOHN'

    constructor(text:string) {
        this.text = text;
        this.normalizedText = text;   // normalize(text);   i should only have normalized text stored in DB, yes???
    }

    public evaluate(context:any):boolean {
        var root = context;
        var expr : string = this.normalizedText+'';
        return eval(expr);
    };
}
