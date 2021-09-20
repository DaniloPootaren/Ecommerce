import Service from '@ember/service';
import {tracked} from '@glimmer/tracking'
import { A } from '@ember/array';



export default class CarService extends Service.extend({
  // anything which *must* be merged to prototype here
}) {
  cars = A([]) as any;
  @tracked pageNumber = 1;
  @tracked pageSize = 10;
  hasNext = true;

   getCars= async ()=>{
    const response = await fetch('/MOCK_DATA.json')
    const data = await response.json()
    const carData = data.slice((this.pageNumber - 1) * this.pageSize, this.pageSize * this.pageNumber)
    this.hasNext = this.pageNumber < (data.length / this.pageSize)
    this.cars.pushObjects(carData)

    return this.cars
  }

   setPageNumber(pageNumber: number){
    this.pageNumber = pageNumber
  }

   setPageSize(pageSize: number){
    this.pageSize = pageSize
  }


}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'car-service': CarService;
  }
}
