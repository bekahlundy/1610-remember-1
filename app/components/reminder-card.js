import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  tagName: 'article',
  classNames: ['reminder-card-cont'],

  actions: {
    removeReminder(model) {
      model.destroyRecord();
    }
  }
});
