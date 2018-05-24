 $(document).ready(function() {
  $('.fa-caret-down').hover(function() {
    $('.location').toggleClass('mystyle');
  });
});
$(document).ready(function() {
  $('.side1').hover(function() {
    $('.glyphicon-fire').toggleClass('glyphiconHover');
  });
});
$(document).ready(function() {
  $('.side2').hover(function() {
    $('.glyphicon-flash').toggleClass('glyphiconHover');
  });
});
$(document).ready(function() {
$('.multi-item-carousel').carousel({
   interval: 2000
 });

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  if (next.next().length>0) {
    next.next().children(':first-child').clone().appendTo($(this));
  } else {
  	$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  }
});
});