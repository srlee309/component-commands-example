import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleFormComponent } from './form/form.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [ExampleFormComponent],
  exports: [ExampleFormComponent],
})
export class ExampleFormUiModule {}
