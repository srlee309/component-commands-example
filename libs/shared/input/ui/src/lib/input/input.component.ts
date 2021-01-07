import {
  Component,
  ChangeDetectionStrategy,
  forwardRef,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shared-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit, OnDestroy, ControlValueAccessor {
  @Input() label: string;
  control = new FormControl();
  private subscriptions = new Subscription();

  ngOnInit(): void {
    this.subscriptions.add(
      this.control.valueChanges.subscribe((value) => {
        this.writeValue(value);
        this.propagateChange(value);
      })
    );
  }
  propagateChange = (_: any) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  writeValue(obj: any): void {
    this.control.setValue(obj, { onlySelf: true, emitEvent: false });
  }
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
