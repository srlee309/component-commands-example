import { SharedInputUiModule } from '../../shared-input-ui.module';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTestComponent } from './input-test.component';

export default {
  title: 'Shared input',
};

const moduleMetadata = {
  declarations: [InputTestComponent],
  imports: [SharedInputUiModule, FormsModule, ReactiveFormsModule],
};

export const Primary = () => ({
  component: InputTestComponent,
  moduleMetadata,
  template: `<shared-input-test></shared-input-test>`,
  params: {
    control: new FormControl(),
  },
});
