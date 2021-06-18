import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SubscribersEdit extends Controller {
    @tracked subscriber = null;

    @action
    save() {
        this.subscriber.save();
        this.transitionToRoute('main.subscribers');
    }
}