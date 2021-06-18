import Model, { attr } from '@ember-data/model';

export default class SubscriberModel extends Model {
    @attr('string') name;
    @attr('date', { defaultValue() {return new Date()}}) date;
    @attr('number') payment;
    @attr('boolean') status;

}
