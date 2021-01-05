import { ComponentHarness } from '@angular/cdk/testing';
import { HeroPower } from '@component-commands-example/example/form/util';

export class ExampleFormHarness extends ComponentHarness {
  static hostSelector = 'example-form';

  getNewHeroButton = this.locatorFor('[data-cy="new-hero-button"]');
  getNameInput = this.locatorFor('[data-cy="name-control"]');
  getAlterEgoInput = this.locatorFor('[data-cy="alter-ego-control"]');
  getPowerSelect = this.locatorFor('[data-cy="power-control"]');

  async getSubmitButton() {
    const element = await this.locatorFor('[data-cy="submit-button"]')();
    return (element as any).element;
  }
  async typeName(text: string) {
    const element = await this.getNameInput();
    return element.sendKeys(text);
  }

  async typeAlterEgo(text: string) {
    const element = await this.getAlterEgoInput();
    return element.sendKeys(text);
  }

  async selectPower(power: HeroPower) {
    const element = await this.getPowerSelect();
    const powerIndex = Object.values(HeroPower).findIndex(
      (val) => val === power
    );
    return element.selectOptions(powerIndex);
  }

  async getModelName() {
    const element = await this.locatorFor('[data-cy="model-name"]')();
    return element.text();
  }
  async getModelAlterEgo() {
    const element = await this.locatorFor('[data-cy="model-alter-ego"]')();
    return element.text();
  }
  async getModelPower() {
    const element = await this.locatorFor('[data-cy="model-power"]')();
    return element.text();
  }
}
