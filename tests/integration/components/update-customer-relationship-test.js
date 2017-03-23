import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('update-customer-relationship', 'Integration | Component | update customer relationship', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{update-customer-relationship}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#update-customer-relationship}}
      template block text
    {{/update-customer-relationship}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
