import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { keepLatestTask } from 'ember-concurrency';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A } from '@ember/array';
import { all } from 'rsvp';

export default class NavbarComponent extends Component {
    @service store;
    @service router;

    @tracked searchResults;
    @tracked selectedRecord;

    @keepLatestTask *searchRecords(searchTerm) {
        this.searchResults = [];

        let results = yield all([
            this.store.query('subscriber', { search: searchTerm }),
            this.store.query('payment', { search: searchTerm }),
        ]).then(([subscriber, payment]) => {
            return [
                ...subscriber.toArray(),
                ...payment.toArray(),
            ];
        });

        this.searchResults = results;
    }

    @action
    onSearchInput(text) {
        if (text.length === 0) {
            this.searchResults = A([]);
        } else {
            return text.length > 1;
        }
    }

    @action
    selectRecord(record) {
        let route;

        if (record.constructor.modelName === 'payment') {
            route = 'main.payments.edit';
        } else {
            route = 'main.subscribers.edit';
        }

        this.router.transitionTo(route, record)
        this.searchResults = [];
    }
}