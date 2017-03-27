import {
  clickable,
  create,
  fillable,
  visitable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/cards/1'),
  clickEdit: clickable('.Big-card__edit-link'),
  changeTitle: fillable('.Edit-card__title'),
  clickSave: clickable('.Edit-card__save-button')
});
