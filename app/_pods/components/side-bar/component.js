import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TodoComponent extends Component {
    @tracked isToggled = false;
  }