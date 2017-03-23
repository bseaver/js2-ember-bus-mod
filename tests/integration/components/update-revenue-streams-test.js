import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('update-revenue-streams', 'Integration | Component | update revenue streams', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{update-revenue-streams}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#update-revenue-streams}}
      template block text
    {{/update-revenue-streams}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
