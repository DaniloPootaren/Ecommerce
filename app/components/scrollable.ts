import Component from '@glimmer/component';

interface ScrollableArgs {}

export default class Scrollable extends Component<ScrollableArgs> {

  onScroll( callback:()=>void, event: any){
    const element = event.target;

    if (element.scrollHeight - element.scrollTop - element.clientHeight < 1) {
      if(callback){
        callback()
      }
  }
  }
}
