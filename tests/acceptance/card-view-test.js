import { test } from 'qunit';
import moduleForAcceptance from 'acceptance-testing-training/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | card view');

test('Should be able to view card', function(assert) {
  visit('/');
  click('a:contains(\'My first card\')');
  andThen(() => {
    const actual = find('h1').text().trim();
    const expected = 'My first card';
    assert.equal(actual, expected);
  });
});
