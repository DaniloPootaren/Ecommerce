import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | car-card/index', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{car-card/index}}`);
    // @ts-ignore
    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#car-card/index}}
        template block text
      {{/car-card/index}}
    `);
    // @ts-ignore
    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
