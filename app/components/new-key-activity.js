import Ember from 'ember';

export default Ember.Component.extend({
  addNewKeyActivity: false,
  actions: {
    keyActivityFormShow() {
      this.set('addNewKeyActivity', true);
    },
    saveKeyActivity() {
     var params = {
       details: this.get('details'),
       tag: this.get('tag'),
       plan: this.get('plan')
     };
     this.set('addNewKeyActivity', false);
     this.sendAction('saveKeyActivity', params);
   }
  }
});
