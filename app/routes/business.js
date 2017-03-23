import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('plan', params.plan_id);
  },
  actions: {
    saveCustomerSegment(params) {
      var newCustomerSegment = this.store.createRecord('customerSegment', params);
      var plan = params.plan;
      plan.get('customerSegments').addObject(newCustomerSegment);
      newCustomerSegment.save().then(function(){
        return plan.save();
      });
      this.transitionTo('business', plan);
    },

    saveKeyPartner(params){
      var newKeyPartner = this.store.createRecord('keyPartner', params);
      var plan = params.plan;
      plan.get('keyPartners').addObject(newKeyPartner);
      newKeyPartner.save().then(function(){
        return plan.save();
      });
      this.transitionTo('business', plan);
    },

    saveKeyActivity(params){
      var newKeyActivity = this.store.createRecord('keyActivity', params);
      var plan = params.plan;
      plan.get('keyActivitys').addObject(newKeyActivity);
      newKeyActivity.save().then(function(){
        return plan.save();
      });
      this.transitionTo('business', plan);
    },


    saveCustomerRelationship(params){
      var newCustomerRelationship = this.store.createRecord('customerRelationship', params);
      var plan = params.plan;
      plan.get('customerRelationships').addObject(newCustomerRelationship);
      newCustomerRelationship.save().then(function(){
        return plan.save();
      });
      this.transitionTo('business', plan);
    },
    saveSalesChannel(params){
      var newSalesChannel = this.store.createRecord('salesChannel', params);
      var plan = params.plan;
      plan.get('salesChannels').addObject(newSalesChannel);
      newSalesChannel.save().then(function(){
        return plan.save();
      });
      this.transitionTo('business', plan);
    },

    update(tempObject, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          tempObject.set(key,params[key]);
        }
      });

      tempObject.save();
      this.transitionTo('business');
    },
    destroySegment(segment){
      segment.destroyRecord();
      this.transitionTo('business');
    },
    destroyRelationship(relationship){
      relationship.destroyRecord();
      this.transitionTo('business')
    }
  }

});
