import { Response } from 'ember-cli-mirage';

export default function() {
  this.namespace = '/api';

  this.resource('lists');
  this.resource('cards');
  this.resource('users');

  this.get('/lists', function(schema/*, request*/) {
    return new Response(404);
  })
}
