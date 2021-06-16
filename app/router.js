import EmberRouter from '@ember/routing/router';
import config from 'foot-dash/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {

  this.route('login');
  this.route('main', {path: '/'}, function() {
    this.route('dashboard');
    this.route('subscribers', function() {
      this.route('edit', {path: '/:id'})
    });
    this.route('payments', function() {
      this.route('edit', {path: '/:id'})
    });
    this.route('edit');
    this.route('profile');
    this.route('settings');
    this.route('activity-log');
  });
});
