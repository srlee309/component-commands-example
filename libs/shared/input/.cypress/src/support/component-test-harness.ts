import { ComponentHarness, TestElement } from '@angular/cdk/testing';
import { getHarness } from '@jscutlery/cypress-harness';
import { SelectorOptions } from '@srleecode/component-command-utils';

export class SharedInputHarness extends ComponentHarness {
  static hostSelector = 'shared-input';
  private find(selectorOptions: SelectorOptions) {
    return this.locatorForOptional(`[data-cy="${selectorOptions.dataCy}"]`)();
  }
  private call(selectorOptions: SelectorOptions, operation: (e) => this) {
    return this.find(selectorOptions)
      .then((e) => operation(e))
      .then(() => this);
  }
  private map(selectorOptions: SelectorOptions, operation: (e) => this) {
    return this.find(selectorOptions).then((e) => operation(e));
  }
  get text() {
    return this.map({ dataCy: 'input' }, (e) => e.element.value);
  }
  type(text: string) {
    return this.call({ dataCy: 'input' }, (e) => e.sendKeys(text));
  }
}

export const sharedInput = () => getHarness(SharedInputHarness);
