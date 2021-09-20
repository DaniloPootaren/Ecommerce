import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Cars extends Controller.extend({
  // anything which *must* be merged to prototype here
}) {

  @service carService: any;

  @action
  loadMore() {
    const pageNumber = this.carService.pageNumber
    this.carService.setPageNumber(pageNumber + 1)
    this.carService.getCars()
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'cars': Cars;
  }
}
