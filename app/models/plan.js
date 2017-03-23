import DS from 'ember-data';

export default DS.Model.extend({
  "author": DS.attr(),
  "date": DS.attr(),
  "title": DS.attr(),
  "version": DS.attr(),
  "costStructures": DS.hasMany('costStructure', { async: true }),
  "customerRelationships": DS.hasMany('customerRelationship', { async: true }),
  "customerSegments": DS.hasMany('customerSegment', { async: true }),
  // for some reason to come back to later keyResources errored out
  "keyActivities": DS.hasMany('keyActivity', { async: true}),
  "keyPartners": DS.hasMany('keyPartner', { async: true}),
  "revenueStreams": DS.hasMany('revenueStream', { async: true}),
  "salesChannels": DS.hasMany('salesChannel', { async: true}),
  "valuePropositions": DS.hasMany('valueProposition', { async: true})
});
