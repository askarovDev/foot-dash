import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SubscribersEdit extends Controller {
    @service('data-base') db;
    
    @tracked subscriber = null;

    @action
    save() {
        this.db.update(this.subscriber);
    }
}