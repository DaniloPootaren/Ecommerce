import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class Cars extends Route.extend({
  // anything which *must* be merged to prototype here

}) {
  @service carService: any;


  async model(){

    const cars: any = await this.carService.getCars()
    return cars
  }
}
