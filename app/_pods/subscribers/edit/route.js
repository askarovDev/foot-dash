import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class Edit extends Route {

    @service('data-base') db;

    model({ id }) {
        return this.db.data.find((item) => item.id === id)
    }

    setupController(controller, model) {
        super.setupController(...arguments)
        controller.subscriber = model;
    }
   
}