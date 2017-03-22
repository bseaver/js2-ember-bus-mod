import Ember from 'ember';

export default Ember.Component.extend({
  addNewCustomerSegment: false,
  actions: {
    customerSegmentFormShow() {
      this.set('addNewCustomerSegment', true);
    },
    saveCustomerSegment() {
     var params = {
       details: this.get('details'),
       tag: this.get('tag'),
       plan: this.get('plan')
     };
     this.set('addNewCustomerSegment', false);
     this.sendAction('saveCustomerSegment', params);
   }
  }
});
