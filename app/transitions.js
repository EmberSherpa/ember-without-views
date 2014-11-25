import slides from './slides';

export default function(){
  var liquid = this;
  var last;
  slides.forEach(function(current){
    if (last) {
      liquid.transition(
        liquid.fromRoute(last),
        liquid.toRoute(current),
        liquid.use('toLeft'),
        liquid.reverse('toRight')
      )
    }
    last = current;
  });
}
