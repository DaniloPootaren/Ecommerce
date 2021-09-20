import Component from '@glimmer/component';

interface ScrollableArgs {}

export default class Scrollable extends Component<ScrollableArgs> {

  onScroll( callback:()=>void, event: any){
    const offset = 0
    const element = event.target;
    if (element.scrollHeight - element.scrollTop <= element.clientHeight + offset) {
      if(callback){
        callback()
      }
  }
  }
}
