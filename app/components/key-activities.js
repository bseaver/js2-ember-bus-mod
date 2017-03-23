import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(keyActivity, params) {
      this.sendAction('update', keyActivity, params);
    },

    delete(keyActivity) {
      this.sendAction('destroyComponent', keyActivity, 'Key Activity');
    }

  }
});
