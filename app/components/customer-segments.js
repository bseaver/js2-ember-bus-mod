import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(segment, params) {
      this.sendAction('update', segment, params);
    },

    delete(segment) {
      if (confirm('Are you sure you want to delete this customer segment?')) {
        this.sendAction('destroySegment', segment);
      }
    }

  }
});
