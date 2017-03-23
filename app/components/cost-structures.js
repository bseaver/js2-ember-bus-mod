import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(costStructure, params) {
      this.sendAction('update', costStructure, params);
    },

    delete(costStructure) {
      this.sendAction('destroyComponent', costStructure, 'Cost Structure');
    }

  }
});
