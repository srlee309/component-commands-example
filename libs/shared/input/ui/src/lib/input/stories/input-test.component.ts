import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'shared-input-test',
  template: `<form [formGroup]="form">
    <shared-input label="test label" formControlName="test"></shared-input>
  </form>`,
})
export class InputTestComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      test: '',
    });
  }
}
