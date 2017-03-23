import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(valueProposition, params) {
      this.sendAction('update', valueProposition, params);
    },

    delete(valueProposition) {
      this.sendAction('destroyComponent', valueProposition, 'Value Proposition');
    }

  }
});
