import {
  SelectorOptions,
  get,
  findElement,
} from '@srleecode/component-command-utils';

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      sharedInput(selector?: SelectorOptions): Chainable<SharedInput>;
    }
  }
}

export class SharedInput {
  constructor(public element: JQuery) {}

  private getInputElement() {
    return findElement(this, { dataCy: 'input' });
  }

  type(text: string) {
    this.getInputElement().type(text, { log: false });
  }

  get text(): Cypress.Chainable<string> {
    return this.getInputElement().invoke('val');
  }
}

Cypress.Commands.add('sharedInput', (selector?: SelectorOptions) =>
  get(selector, SharedInput, 'shared-input')
);
