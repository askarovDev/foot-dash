import Model, { attr, belongsTo } from '@ember-data/model';

export default class PaymentModel extends Model {
    @attr('string') name;
    @attr('date', { defaultValue() {return new Date()}}) date;
    @attr('boolean') status;
    @attr('number') sum;

    @belongsTo() subscriber;
}