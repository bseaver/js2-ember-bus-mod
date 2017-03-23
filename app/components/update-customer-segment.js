import Ember from 'ember';
export default Ember.Component.extend({
  updateCustomerSegmentForm: false,
  actions: {
    updateCustomerSegmentForm() {
      this.set('updateCustomerSegmentForm', true);
    },
    update(segment) {
      var params = {
        details: this.get('details'),
        tag: this.get('tag'),
        plan: this.get('plan')
      };
      this.set('updateCustomerSegmentForm', false);
      this.sendAction('update', segment, params);
    }
  }
});
