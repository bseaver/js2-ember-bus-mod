import Ember from 'ember';

export default Ember.Component.extend({
  addNewCustomerSegment: false,
  actions: {
    customerSegmentFormShow() {
      this.set('addNewCustomerSegment', true);
    },

    saveCustomerSegment(plan) {
      console.log(plan.date);
      var params = {
        branch: "customerSegments",
        record: "new",
        tag: this.get('tag'),
        details: this.get('details')
      };
      this.set('addNewCustomerSegment', false);
      this.sendAction('updatePlan', plan, params);
    }
  }
});
