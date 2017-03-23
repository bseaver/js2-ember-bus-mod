import Ember from 'ember';

export default Ember.Component.extend({
  addNewPlan: false,

  actions: {
    planFormShow(){
      this.set('addNewPlan', true);
    },
    savePlan(){
      var params = {
        "author": this.get('author'),
        "date": this.get('date'),
        "title": this.get('title'),
        "version": this.get('version')
      };
      this.set('addNewPlan', false);
      this.sendAction('savePlan', params);
    }
  }
});
