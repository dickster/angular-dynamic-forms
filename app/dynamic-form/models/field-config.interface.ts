import { ValidatorFn } from '@angular/forms';
import {BizRule} from "./bizRule";


export interface FieldConfig {
  key?: string;
  disabled?: boolean,
  label?: string,
  labelKey?:string;   // if null, default it to label.  useful for when the label is really long
                      // or you need a unique identifier for the same label.
  name: string,
  options?: string[],
  placeholder?: string,
  type: string,
// TODO : remove validation.  it will be part of BizRules.
  validation?: ValidatorFn[],
  value?: any,

    // layout...
  labelWidth?:number,
  width?:number,    //3  ---> col-md-3.
  offset?:number,   //  col-md-offset-2.
  // ....

  required?: boolean,
  order?: number,
  css?: string,
  rememberAs?:string   ///names...

  bizRules?: BizRule[];
}




//
//
//   label: string;
//   labelKey?:string;   // if null, default it to label.  useful for when the label is really long
//                       // or you need a unique identifier for the same label.
//   // layout...
//   labelWidth:number;
//   width:number;
//   offset:number;
//   // ....
//   required: boolean;
//   order: number;
//   css: string;
//   rememberAs:string;
//
//   bizRules: BizRule[];
//
//
//   constructor(options: {
//     key: string,
//     type: string,
//     value?: T,
//     label?: string,
//     required?: boolean,
//     labelKey?: string,
//     labelWidth?: number,
//     bizRules?:BizRule[],
//     width?: number,
//     offset?: number,
//     rememberAs?:string,
//     order?: number,
//     css?: string,
//   }) {
//     this.key = options.key;
//     this.type = options.type;
//     this.value = options.value;
//     this.label = options.label || '';
//     this.required = !!options.required;
//     this.order = options.order ? options.order : 1;
//     this.css = options.css || '';
//     this.width = options.width || 6;
//     this.offset = options.offset || 0;
//     this.labelWidth = options.labelWidth || 6;
//     this.labelKey = options.labelKey || this.label;
//     this.placeholder = options.placeholder || '';
//     this.bizRules = options.bizRules || [];
//     this.rememberAs = options.rememberAs;   // add change listener.  set rememory[key]=value.
//
//     // if async validators added, handle them myself?   i.e. after 400MS, call any queued up validators
//     // when data is dirty.
//   }
//
// }