import Controller from "@ember/controller"
import { inject as service } from '@ember/service';

export default class Subcscribers extends Controller {
    @service('data-base') db;
    rows = this.db.data;
}