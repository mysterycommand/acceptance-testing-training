import { test } from 'qunit';
import moduleForAcceptance from 'acceptance-testing-training/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | card view');

test('Should be able to view card', function(assert) {
  // assemble
  const list = server.create('list', { name: 'todo' });
  server.create('card', {
    title: 'My first card',
    list,
  })

  // act on
  visit('/');
  click('a:contains(\'My first card\')');

  // assert
  andThen(() => {
    const actual = find('h1').text().trim();
    const expected = 'My first card';
    assert.equal(actual, expected);
  });
});

test('Should be able to view the card description', function(assert) {
  server.create('card', {
    description: 'The first card',
  });

  visit('/cards/1');

  andThen(() => {
    const actual = find('.Big-card__description').text().trim();
    const expected = 'The first card';
    assert.equal(actual, expected);
  });
});

test('Should be able to edit card', function(assert) {
  server.create('card');

  visit('/cards/1');
  click('.Big-card__edit-link');
  fillIn('.Edit-card__title', 'New title');
  click('.Edit-card__save-button');

  andThen(() => {
    const actual = find('h1').text().trim();
    const expected = 'New title';
    assert.equal(actual, expected);
  });
});

test('Should see \'Something broke.\' when the API 404s', function(assert) {
  server.get('/lists', {}, 404);

  visit('/');

  andThen(() => {
    const actual = find('h1').text().trim();
    const expected = 'Something broke.';
    assert.equal(actual, expected);
  });
});
