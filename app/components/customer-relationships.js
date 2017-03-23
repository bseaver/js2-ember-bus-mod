import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(relationship, params) {
      this.sendAction('update', relationship, params);
    },

    delete(relationship) {
      this.sendAction('destroyComponent', relationship, 'customer relationship');
    }

  }
});
