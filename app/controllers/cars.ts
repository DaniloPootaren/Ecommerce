import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class Cars extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {

  @action
  loadMore() {
    console.log('loading more ....');
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'cars': Cars;
  }
}
