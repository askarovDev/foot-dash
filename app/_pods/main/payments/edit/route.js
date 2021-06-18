import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class Edit extends Route {

    @service('data-base') db;

    model({ id }) {
        if (id === 'new') {
            return this.store.createRecord('payment');
          } else {
            return this.store.findRecord('payment', id);
          }
    }

    setupController(controller, model) {
        super.setupController(...arguments)
        controller.payment = model;
    }
   
}