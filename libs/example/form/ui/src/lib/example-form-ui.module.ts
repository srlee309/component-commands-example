import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleFormComponent } from './form/form.component';
import { SharedInputUiModule } from '@component-commands-example/shared/input/ui';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedInputUiModule,
  ],
  declarations: [ExampleFormComponent],
  exports: [ExampleFormComponent],
})
export class ExampleFormUiModule {}
