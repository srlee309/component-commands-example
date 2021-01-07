import './component-command';
import '@srleecode/component-command-utils';
import 'zone.js/dist/zone';
/* @hack fixes "Mocha has already been patched with Zone" error. */
(globalThis as any)['Mocha']['__zone_patch__'] = false;
import 'zone.js/dist/zone-testing';
import '@jscutlery/cypress-harness/support';
