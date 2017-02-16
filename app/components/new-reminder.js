import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  tagName: 'article',
  classNames: ['new-reminder'],

  title: '',
  date: '',
  notes: '',

  actions: {
    addReminder() {
      const reminder = this.getProperties('title', 'date', 'notes');
      this.get('store').createRecord('reminder', reminder).save().then(() => {
        this.setProperties({ title: '', date: '', notes: '' });
      })
    }
  }
});
