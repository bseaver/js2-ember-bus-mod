import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('new-revenue-stream', 'Integration | Component | new revenue stream', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{new-revenue-stream}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#new-revenue-stream}}
      template block text
    {{/new-revenue-stream}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
