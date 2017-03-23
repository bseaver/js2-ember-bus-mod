import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('update-cost-structure', 'Integration | Component | update cost structure', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{update-cost-structure}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#update-cost-structure}}
      template block text
    {{/update-cost-structure}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
