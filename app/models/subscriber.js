import Model, { attr, hasMany } from '@ember-data/model';
import { computed } from '@ember/object'

export default class SubscriberModel extends Model {
    @attr('string') name;
    @attr('date', { defaultValue() {return new Date()}}) date;
    @attr('boolean') status;

    @hasMany('payment') payments;


    // @computed('payments')
    // get totalPayments() {
    //     return this.payments.reduce((sum, inc) => {
    //         console.log(sum, inc.sum)
    //         return sum + inc.get('sum');
    //     }, 0)
    // }
}
