import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Hero, HeroPower } from '@component-commands-example/example/form/util';

@Component({
  selector: 'example-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleFormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  subscriptions = new Subscription();
  model: Hero;
  constructor(
    private formBuilder: FormBuilder,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: '',
      alterEgo: '',
      power: '',
    });
    this.subscriptions.add(
      this.form.valueChanges
        .pipe(debounceTime(200))
        .subscribe((formValues: Hero) => {
          this.model = formValues;
          this.cdRef.markForCheck();
        })
    );
  }
  powers = Object.values(HeroPower);

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
