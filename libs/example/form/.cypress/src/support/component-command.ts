import {
  SelectorOptions,
  get,
  findElement,
  find,
} from '@srleecode/component-command-utils';
import { HeroPower } from '@component-commands-example/example/form/util';
import { SharedInput } from '@cypress/shared/input';

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      exampleForm(selector?: SelectorOptions): Chainable<ExampleForm>;
    }
  }
}

export class ExampleForm {
  constructor(public element: JQuery) {}

  get submitButton(): Cypress.Chainable<JQuery> {
    return findElement(this, { dataCy: 'submit-button' });
  }
  get newHeroButton(): Cypress.Chainable<JQuery> {
    return findElement(this, { dataCy: 'new-hero-button' });
  }
  get modelName(): Cypress.Chainable<string> {
    return findElement(this, { dataCy: 'model-name' }).invoke('text');
  }
  get modelAlterEgo(): Cypress.Chainable<string> {
    return findElement(this, { dataCy: 'model-alter-ego' }).invoke('text');
  }
  get modelPower(): Cypress.Chainable<string> {
    return findElement(this, { dataCy: 'model-power' }).invoke('text');
  }
  get modelValuesContainerElement(): Cypress.Chainable<JQuery> {
    return findElement(this, { dataCy: 'model-values-container' });
  }

  typeName(text: string): void {
    // it is getting a component command for a subcomponent and using that
    find(this, { dataCy: 'name-control' }, SharedInput).tap('type', text);
  }
  typeAlterEgo(text: string): void {
    findElement(this, { dataCy: 'alter-ego-control' }).type(text);
  }
  selectPower(power: HeroPower): void {
    findElement(this, { dataCy: 'power-control' }).select(power.toString());
  }
}

Cypress.Commands.add('exampleForm', (selector?: SelectorOptions) =>
  get(selector, ExampleForm, 'example-form')
);
