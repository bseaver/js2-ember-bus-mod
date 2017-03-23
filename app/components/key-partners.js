import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(keyPartner, params) {
      this.sendAction('update', keyPartner, params);
    },

    delete(keyPartner) {
      this.sendAction('destroyComponent', keyPartner, 'Key Partner');
    }

  }
});
