import Ember from 'ember';

export default Ember.Component.extend({
  addNewKeyResource: false,
  actions: {
    keyResourceFormShow() {
      this.set('addNewKeyResource', true);
    },
    saveKeyResource() {
     var params = {
       details: this.get('details'),
       tag: this.get('tag'),
       plan: this.get('plan')
     };
     this.set('addNewKeyResource', false);
     this.sendAction('saveKeyResource', params);
   }
  }
});
