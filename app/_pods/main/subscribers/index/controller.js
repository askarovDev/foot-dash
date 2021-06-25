import Controller from "@ember/controller"
import { inject as service } from '@ember/service';

export default class Subcscribers extends Controller {
    // @service('data-base') db;
    rows = [];

    get totalPayments() {
        return this.args.row.payments.reduce((acc, payment) => {
            return acc + payment.sum;
        }, 0)
    }
}