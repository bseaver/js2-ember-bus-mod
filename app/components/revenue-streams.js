import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(revenueStream, params) {
      this.sendAction('update', revenueStream, params);
    },

    delete(revenueStream) {
      this.sendAction('destroyComponent', revenueStream, 'RevenueStream');
    }

  }
});
