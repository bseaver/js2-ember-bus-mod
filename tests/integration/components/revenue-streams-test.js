import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('revenue-streams', 'Integration | Component | revenue streams', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{revenue-streams}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#revenue-streams}}
      template block text
    {{/revenue-streams}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
