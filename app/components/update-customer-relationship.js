import Ember from 'ember';

export default Ember.Component.extend({
  updateCustomerRelationshipForm: false,
  actions: {
    updateCustomerRelationshipForm() {
      this.set('updateCustomerRelationshipForm', true);
    },
    update(relationship) {
      var params = {
        details: this.get('details'),
        tag: this.get('tag'),
        customerSegment: this.get('customerSegment'),
        plan: this.get('plan')
      };
      this.set('updateCustomerRelationshipForm', false);
      this.sendAction('update', relationship, params);
    }
  }
});
