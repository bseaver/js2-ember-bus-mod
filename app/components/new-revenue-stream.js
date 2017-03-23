import Ember from 'ember';

export default Ember.Component.extend({
  addNewRevenueStream: false,
  actions: {
    revenueStreamFormShow() {
      this.set('addNewRevenueStream', true);
    },
    saveRevenueStream() {
     var params = {
       details: this.get('details'),
       tag: this.get('tag'),
       customerSegment: this.get('customerSegment'),
       plan: this.get('plan')
     };
     this.set('addNewRevenueStream', false);
     this.sendAction('saveRevenueStream', params);
   }
  }
});
