var bounces = 0;

$(document).ready(function() {
	$('#scroll-arrow').animateCss('bounce');
	bounces++;
});

window.setInterval(function() {
	if (bounces <= 5) {
		$('#scroll-arrow').animateCss('bounce');
		bounces++;
	}
}, 5 * 1000);

$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top -5
    }, 750);
});


$('#arrow-link').on('click', function() {
	bounces = 10;
});