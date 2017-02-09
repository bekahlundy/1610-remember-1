import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reminders-list', 'Integration | Component | reminders list', {
  integration: true,

  beforeEach: function () {
    this.set('reminder', { title: 'josh', date: 'date', notes: 'josh needs 20 dogs'})
  }
});


test('it renders an ul', function(assert) {
  this.render(hbs`{{reminders-list}}`);
  assert.equal(this.$('ul').length, 1);
});

test('it renders an h1', function(assert) {
  this.render(hbs`{{reminders-list}}`);
  assert.equal(this.$('h1').length, 1);
});


// // Template block usage:
// this.render(hbs`
//   {{#reminders-list}}
//     template block text
//   {{/reminders-list}}
// `);
// assert.equal(this.$().text().trim(), 'template block text');

// test('default route renders a title', () => {
//   this.render(hbs`{{reminders-list}}`);
//   assert
//   andThen(() => {
//     equal(find('h1')).length, 1, 'The first page renders an h1'
//   })
// })
