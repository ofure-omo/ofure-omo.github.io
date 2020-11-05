var offset = 0;

$(document).ready(function(){

  $('.left').bind('mouseenter', function() {
    var self = $(this);
    this.iid = setInterval(function() {
    offset += 300;
    $('html, body').animate({
      scrollTop: offset
    }, 1);

  }, 10);
}).bind('mouseleave', function(){
    this.iid && clearInterval(this.iid);
});


$('.right').bind('mouseenter', function() {
  var self = $(this);
  this.iid = setInterval(function() {
    offset -= 300;
    $('html, body').animate({
        scrollTop: offset
    }, 1);

  }, 10);
}).bind('mouseleave', function(){
    this.iid && clearInterval(this.iid);
  });
});