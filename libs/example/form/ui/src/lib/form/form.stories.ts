import { ExampleFormComponent } from './form.component';
import { ExampleFormUiModule } from '../example-form-ui.module';

export default {
  title: 'Example form',
};

const moduleMetadata = {
  imports: [ExampleFormUiModule],
};

export const Primary = () => ({
  component: ExampleFormComponent,
  moduleMetadata,
  template: `<example-form></example-form>`,
});
