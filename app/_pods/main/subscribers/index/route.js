import Route from '@ember/routing/route';

export default class SubscribersRoute extends Route {
    model() {
        return this.store.findAll('subscriber')
    }
    setupController(controller, model) {
        super.setupController(...arguments);
        controller.rows=model
    }
}
