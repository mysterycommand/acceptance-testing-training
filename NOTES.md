# Notes
> from this training at EmberConf 2017

A "triple A" test:
- Assembles | state
- Acts on   | state
- Asserts   | state

Contract tests:
- ensure that your mocks match the real API
- not baked into Mirage, but might be worth doing

Match 'level of abstraction'/'system under test' throughout the test

[`ember-test-selector`](https://github.com/simplabs/ember-test-selectors)
[`ember-hook`](https://github.com/Ticketfly/ember-hook)

[`ember-cli-page-object`](https://github.com/san650/ember-cli-page-object)
 - See also: https://martinfowler.com/bliki/PageObject.html

### Mirage Best Practices
- import routes from separate files (esp. if filtering/sorting)
- check out mirage factories, use them with traits to speed up the "assembles" step

### Eat Your Veggies!
