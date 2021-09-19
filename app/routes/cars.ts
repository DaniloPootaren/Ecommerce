import Route from '@ember/routing/route';


export default class Cars extends Route.extend({
  // anything which *must* be merged to prototype here
}) {
  async model(){
    const response = await fetch('/MOCK_DATA.json')
    const cars = await response.json()
    return {cars}
  }
}
