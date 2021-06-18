import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class Edit extends Route {

    @service('data-base') db;

    model({ id }) {
        if (id === 'new') {
            return this.store.createRecord('subscriber');
          } else {
            return this.store.findRecord('subscriber', id);
          }
    }

    setupController(controller, model) {
        super.setupController(...arguments)
        controller.subscriber = model;
    }
   
}