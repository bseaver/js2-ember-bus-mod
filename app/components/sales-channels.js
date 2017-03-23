import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(salesChannel, params) {
      this.sendAction('update', salesChannel, params);
    },

    delete(salesChannel) {
      this.sendAction('destroyComponent', salesChannel, 'Sales Channel');
    }

  }
});
