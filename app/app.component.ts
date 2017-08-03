import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { FieldConfig } from './dynamic-form/models/field-config.interface';
import { DynamicFormComponent } from './dynamic-form/containers/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <dynamic-form
        [config]="config"
        #form="dynamicForm"
        (submit)="submit($event)">
      </dynamic-form>
      {{ form.valid }}
      {{ form.value | json }}
    </div>
  `
})
export class AppComponent implements AfterViewInit {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  config: FieldConfig[] = [

    // nest a panel with

    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name',
      required:true,
      // TODO: remove explicit validator declaration and use a factory instead.  factory.createValidator("valName:arg1,arg2,arg3") ---> returns validatorFn.
      validation: [Validators.required, Validators.minLength(4)],
      width:6,
    },

    {
      type: 'select',
      label: 'Favourite Food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option',
      required:true,
      width:12,
      validation: [Validators.required],
      rememberAs: 'foods'
    },

    {
      label: 'Submit',
      width:3,
      name: 'submit',
      type: 'button'
    }
  ];

  ngAfterViewInit() {
    //TODO : remove this.  should be configured on form.  any submit buttons should use [disabled]="form.valid"
    let previousValid = this.form.valid;
    this.form.changes.subscribe(() => {
      if (this.form.valid !== previousValid) {
        previousValid = this.form.valid;
        this.form.setDisabled('submit', !previousValid);
      }
    });

    // TODO : remove this. for demo only.
    this.form.setDisabled('submit', true);
    this.form.setValue('name', 'Todd Motto');
  }

  submit(value: {[name: string]: any}) {
    console.log(value);
  }
}
