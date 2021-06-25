import Component from '@glimmer/component';

export default class TableRow extends Component {
    get totalPayments() {
        return this.args.row.payments.reduce((acc, payment) => {
            return acc + payment.sum;
        }, 0)
    }
}