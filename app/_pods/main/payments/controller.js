import Controller from "@ember/controller"
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object";


export default class PaymentsEdit extends Controller {
    @tracked payment = null;

    @action
    save() {
        this.payment.save();
        this.transitionToRoute('main.payments');
    }
}
// export default class Payments extends Controller {
   
//     @service('data-base') db;

//     rows = this.db.data;
// }