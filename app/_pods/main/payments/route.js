import Route from '@ember/routing/route';

export default class PaymentsRoute extends Route {
    model() {
        return this.store.findAll('payment')
    }
    setupController(controller, model) {
        super.setupController(...arguments);
        controller.rows=model
    }
}

