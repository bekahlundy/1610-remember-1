import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  tagName: 'article',
  classNames: ['container'],

  actions: {
    removeReminder(reminder) {
      reminder.destroyRecord();
    }
  }
});
