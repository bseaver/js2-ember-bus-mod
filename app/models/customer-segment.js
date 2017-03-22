import DS from 'ember-data';

export default DS.Model.extend({
  details: DS.attr(),
  tag: DS.attr(),
  plan: DS.belongsTo('plan', { async: true })
});
