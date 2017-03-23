import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(keyResource, params) {
      this.sendAction('update', keyResource, params);
    },

    delete(keyResource) {
      this.sendAction('destroyComponent', keyResource, 'Key Resource');
    }

  }
});
