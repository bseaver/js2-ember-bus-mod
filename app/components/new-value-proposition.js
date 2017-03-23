import Ember from 'ember';

export default Ember.Component.extend({
  addNewValueProposition: false,
  actions: {
    valuePropositionFormShow() {
      this.set('addNewValueProposition', true);
    },
    saveValueProposition() {
     var params = {
       details: this.get('details'),
       tag: this.get('tag'),
       customerSegment: this.get('customerSegment'),
       plan: this.get('plan')
     };
     this.set('addNewValueProposition', false);
     this.sendAction('saveValueProposition', params);
   }
  }
});
