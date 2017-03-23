import Ember from 'ember';

export default Ember.Component.extend({
  addNewSalesChannel: false,
  actions: {
    salesChannelFormShow() {
      this.set('addNewSalesChannel', true);
    },
    saveSalesChannel() {
     var params = {
       details: this.get('details'),
       tag: this.get('tag'),
       customerSegment: this.get('customerSegment'),
       plan: this.get('plan')
     };
     this.set('addNewSalesChannel', false);
     this.sendAction('saveSalesChannel', params);
   }
  }
});
