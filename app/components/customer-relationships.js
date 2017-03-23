import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(relationship, params) {
      this.sendAction('update', relationship, params);
    },

    delete(relationship) {
      if (confirm('Are you sure you want to delete this customer relationship?')) {
        this.sendAction('destroyRelationship', relationship);
      }
    }

  }
});
