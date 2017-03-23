import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(segment, params) {
      this.sendAction('update', segment, params);
    },

    delete(segment) {
      this.sendAction('destroyComponent', segment, 'customer segment');
    }

  }
});
