import Ember from 'ember';

export default Ember.Component.extend({
  addNewCustomerRelationship: false,
  actions: {
    customerRelationshipFormShow() {
      this.set('addNewCustomerRelationship', true);
    },
    saveCustomerRelationship() {
     var params = {
       details: this.get('details'),
       tag: this.get('tag'),
       customerSegment: this.get('customerSegment'),
       plan: this.get('plan')
     };
     this.set('addNewCustomerRelationship', false);
     this.sendAction('saveCustomerRelationship', params);
   }
  }
});
