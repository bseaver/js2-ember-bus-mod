import DS from 'ember-data';

export default DS.Model.extend({
  "author": DS.attr(),
  "costStructures": DS.attr(),
  "customerRelationships": DS.attr(),
  "customerSegment": DS.attr(),
  "date": DS.attr(),
  "keyActivities": DS.attr(),
  "keyPartners": DS.attr(),
  "keyResources": DS.attr(),
  "revenueStreams": DS.attr(),
  "salesChannels": DS.attr(),
  "title": DS.attr(),
  "valuePropositions": DS.attr()
});
