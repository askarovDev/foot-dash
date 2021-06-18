import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class PaymentsEdit extends Controller {
    @tracked Payment = null;

    @action
    save() {
        this.payment.save();
        this.transitionToRoute('main.payments');
    }
}