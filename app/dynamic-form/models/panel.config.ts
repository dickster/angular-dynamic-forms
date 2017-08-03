import {FieldConfig} from "./field-config.interface";

export interface PanelConfig {
    title:string,
    titleKey?:string,
    name:string,  //binding.
    fields:FieldConfig[];
    type:string;
}
