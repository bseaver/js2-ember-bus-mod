import Ember from 'ember';

export default Ember.Component.extend({
  addNewKeyPartner: false,
  actions: {
    keyPartnerFormShow() {
      // this.sendAction('hideForms');
      this.set('addNewKeyPartner', true);
    },
    saveKeyPartner() {
     var params = {
       details: this.get('details'),
       tag: this.get('tag'),
       plan: this.get('plan')
     };
     this.set('addNewKeyPartner', false);
     this.sendAction('saveKeyPartner', params);
   }
  }
});
