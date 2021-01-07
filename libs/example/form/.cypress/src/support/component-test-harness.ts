import { ComponentHarness } from '@angular/cdk/testing';
import { HeroPower } from '@component-commands-example/example/form/util';
import { getHarness } from '@jscutlery/cypress-harness';
import { SelectorOptions } from '@srleecode/component-command-utils';

class CypressComponentTestHarness extends ComponentHarness {
  protected find(selectorOptions: SelectorOptions) {
    if (selectorOptions.dataCy) {
      return this.locatorForOptional(`[data-cy="${selectorOptions.dataCy}"]`)();
    }
    return this.locatorForOptional(selectorOptions.css)();
  }
  protected findElement(selectorOptions: SelectorOptions) {
    return this.find(selectorOptions).then((e) => (e as any).element);
  }
  protected call(selectorOptions: SelectorOptions, operation: (e) => this) {
    return this.find(selectorOptions)
      .then((e) => operation(e))
      .then(() => this);
  }

  protected map(selectorOptions: SelectorOptions, operation: (e) => this) {
    return this.find(selectorOptions).then((e) => operation(e));
  }
}

export class ExampleFormHarness extends CypressComponentTestHarness {
  static hostSelector = 'example-form';

  get submitButton() {
    return this.findElement({ dataCy: 'submit-button' });
  }

  get modelValuesContainer() {
    return this.find({ dataCy: 'model-values-container' });
  }

  get modelName() {
    return this.map({ dataCy: 'model-name' }, (e) => e.text());
  }

  get modelAlterEgo() {
    return this.map({ dataCy: 'model-alter-ego' }, (e) => e.text());
  }

  get modelPower() {
    return this.map({ dataCy: 'model-power' }, (e) => e.text());
  }

  typeName(text: string) {
    // it would be good if we could get the harness for the specifc component shared-input and then use that here
    // This doesn't seem to be supported at the moment
    return this.call({ css: '[data-cy="name-control"] input' }, (e) =>
      e.sendKeys(text)
    );
  }

  typeAlterEgo(text: string) {
    return this.call({ dataCy: 'alter-ego-control' }, (e) => e.sendKeys(text));
  }

  selectPower(power: HeroPower) {
    const powerIndex = Object.values(HeroPower).findIndex(
      (val) => val === power
    );
    return this.call({ dataCy: 'power-control' }, (e) =>
      e.selectOptions(powerIndex)
    );
  }

  getFirst() {
    this.map({ dataCy: 'model-power' }, (e) => e.text());
  }
}

export const exampleForm = () => getHarness(ExampleFormHarness);
