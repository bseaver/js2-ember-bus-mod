import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions: {
    showUpdateForm() {
      this.set('updateForm', true);
    },
    update(thisComponent) {
      if (this.get('customerSegment')){
        var params = {
          details: this.get('details'),
          tag: this.get('tag'),
          customerSegment: this.get('customerSegment'),
          plan: this.get('plan')
        };
      } else {
        var params = {
          details: this.get('details'),
          tag: this.get('tag'),
          plan: this.get('plan')
        };
      }
      this.set('updateForm', false);
      this.sendAction('update', thisComponent, params);
    }
  }
});
