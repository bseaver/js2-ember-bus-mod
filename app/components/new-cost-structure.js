import Ember from 'ember';

export default Ember.Component.extend({
  addNewCostStructure: false,
  actions: {
    costStructureFormShow() {
      this.set('addNewCostStructure', true);
    },
    saveCostStructure() {
     var params = {
       details: this.get('details'),
       tag: this.get('tag'),
       plan: this.get('plan')
     };
     this.set('addNewCostStructure', false);
     this.sendAction('saveCostStructure', params);
   }
  }
});
