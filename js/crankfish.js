(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

require('../components/audioplayer/player.js');

require('../js/src/main.js');

require('../js/src/contact_me');

},{"../components/audioplayer/player.js":2,"../js/src/contact_me":3,"../js/src/main.js":4}],2:[function(require,module,exports){
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  Amplitude.init({
    "songs": [{
      "name": "Represent",
      "artist": "Crankfish",
      "album": "Red Swallow",
      "url": "/audioStream/eMastered_Roland.mp3",
      "cover_art_url": "img/cf-cd-cover-2002.jpg"
    }, {
      "name": "Walk with Roland",
      "artist": "Crankfish",
      "album": "Red Swallow",
      "url": "/audioStream/eMastered_Roland.mp3",
      "cover_art_url": "img/cf-cd-cover-2002.jpg"
    }, {
      "name": "King Pin",
      "artist": "Crankfish",
      "album": "Red Swallow",
      "url": "/audioStream/King_Pin.mp3",
      "cover_art_url": "img/cf-cd-cover-2002.jpg"
    }, {
      "name": "Syllable",
      "artist": "Crankfish",
      "album": "Red Swallow",
      "url": "/audioStream/eMastered_Syllable.mp3",
      "cover_art_url": "img/cf-cd-cover-2002.jpg"
    }, {
      "name": "Red Swallow",
      "artist": "Crankfish",
      "album": "Red Swallow",
      "url": "/audioStream/eMastered_Red_swallow.mp3",
      "cover_art_url": "img/cf-cd-cover-2002.jpg"
    }]
  }); // $(document).ready((){
  // $('BODY').load('/components/audioplayer/player.html')
  // });

  var thePlayer = "\n  <div class=\"player-container container-fluid\">\n    <div class=\"player\">\n      <div class=\"album-art-container\">\n        <img src=\"/img/cf-cd-cover-2002.jpg\" class=\"album-art\"/>\n        <div class=\"song-title\">Represent <sup class=\"number\">#1</sup></divv>\n        <div class=\"song-artist\">Crankfish</div>\n       </div>\n    </div>\n    \n    <div class=\"meta-container\">\n        <div class=\"control-container\">\n          <div class=\"amplitude-prev\">\n            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n              <title>skip-previous</title>\n              <path fill=\"#ffffff\" d=\"M9.516 12l8.484-6v12zM6 6h2.016v12h-2.016v-12z\"></path>\n            </svg>\n          </div>\n          <div class=\"play-pause-contianer hvr-rectangle-out\">\n            <div class=\"amplitude-play-pause\" data-amplitude-song-index=\"0\">\n            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" class=\"play-icon\" width=\"32\" height=\"32\" viewBox=\"0 0 24 24\">\n            <title>play-arrow</title>\n                <path fill=\"#ffffff\" d=\"M6.516 5.016l10.969 6.984-10.969 6.984v-13.969z\"></path>\n              </svg>\n  \n          </div>\n          </div>\n          <div class=\"amplitude-next\">\n            <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n              <title>skip-next</title>\n              <path fill=\"#ffffff\" d=\"M15.984 6h2.016v12h-2.016v-12zM6 18v-12l8.484 6z\"></path>\n            </svg>\n          </div>\n        </div>\n        <div class=\"time-container\">\n          <span class=\"current-time\">\n            <span class=\"amplitude-current-minutes\" data-amplitude-song-index=\"0\"></span>:<span class=\"amplitude-current-seconds\" data-amplitude-song-index=\"0\"></span>\n          </span>\n          <span style=\"margin: 0 4px 0 4px;\"> / </span>\n          <span class=\"duration\">\n            <span class=\"amplitude-duration-minutes\" data-amplitude-song-index=\"0\">3</span>:<span class=\"amplitude-duration-seconds\" data-amplitude-song-index=\"0\">30</span>\n          </span>\n        </div>\n        \n        <progress class=\"amplitude-song-played-progress\" data-amplitude-song-index=\"0\" id=\"song-played-progress-1\"></progress>\n        \n        \n      </div>\n      \n      <progress class=\"amplitude-song-played-progress\" data-amplitude-song-index=\"0\" id=\"song-played-progress-1\"></progress>\n      \n        \n      </div>\n    </div>\n    </div>\n  <div id=\"preload\">\n   <div id=\"preload\">\n    <img src=\"/img/icons/skip-previous.svg\"/>\n    <img src=\"/img/icons/play-arrow.svg\"/>\n    <img src=\"/img/icons/pause.svg\"/>\n    <img src=\"/img/icons/skip-next.svg\"/>\n  </div>\n</div>";
  $('BODY').append(thePlayer);
});

window.load = function () {
  alert('window.load');
  document.getElementById('song-played-progress-1').addEventListener('click', function (e) {
    if (Amplitude.getActiveIndex() == 0) {
      var offset = this.getBoundingClientRect();
      var x = e.pageX - offset.left;
      Amplitude.setSongPlayedPercentage(parseFloat(x) / parseFloat(this.offsetWidth) * 100);
    }
  });
  document.getElementById('song-played-progress-2').addEventListener('click', function (e) {
    if (Amplitude.getActiveIndex() == 1) {
      var offset = this.getBoundingClientRect();
      var x = e.pageX - offset.left;
      Amplitude.setSongPlayedPercentage(parseFloat(x) / parseFloat(this.offsetWidth) * 100);
    }
  });
};

},{}],3:[function(require,module,exports){
"use strict";

$(function () {
  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function submitError($form, event, errors) {// additional error messages or events
    },
    submitSuccess: function submitSuccess($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM

      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message

      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }

      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages

      $.ajax({
        url: "././mail/contact_me.php",
        type: "POST",
        data: {
          name: name,
          phone: phone,
          email: email,
          message: message
        },
        cache: false,
        success: function success() {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
          $('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success').append('</div>'); //clear all fields

          $('#contactForm').trigger("reset");
        },
        error: function error() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          $('#success > .alert-danger').append('</div>'); //clear all fields

          $('#contactForm').trigger("reset");
        },
        complete: function complete() {
          setTimeout(function () {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function filter() {
      return $(this).is(":visible");
    }
  });
  $("a[data-toggle=\"tab\"]").click(function (e) {
    e.preventDefault();
    $(this).tab("show");
  });
});
/*When clicking on Full hide fail/success boxes */

$('#name').focus(function () {
  $('#success').html('');
});

},{}],4:[function(require,module,exports){
"use strict";

function open(a) {
  $.ajax({
    url: a,
    success: function success(a) {
      $('.project-content').html(a), $('.project-content').hide(0), $('.project-window').hide(0), close(), $('html, body').animate({
        scrollTop: $('#project-show').offset().top - 200
      }, 300, function () {
        $('.project-window').show(0), $('.project-window').css('height', '0');
        var a = $('.project-content').height();
        $('.project-window').animate({
          height: a
        }, 500, function () {
          $('.project-window').css('height', a), $('.project-content').fadeIn('slow');
        });
      });
    }
  });
}

function close() {
  $('.close-btn').click(function () {
    $('.project-window').slideUp('slow'), $('.project-content').fadeOut('slow'), $('html, body').animate({
      scrollTop: $('#discography').offset().top - 50
    }, 1000), opened = !1;
  });
}

function opennew(a) {
  $.ajax({
    url: a.data('url'),
    success: function success(b) {
      $('.news-content').html(b), $('.news-content').hide(0), $('.news-window').hide(0), closenew(a), $(a).parent().next('.news-window').show(0), $(a).parent().next('.news-window').css('height', '0');
      var c = $('.news-content').height();
      $(a).parent().next('.news-window').animate({
        height: c
      }, 500, function () {
        $(a).parent().next('.news-window').css('height', 'auto'), $('.news-content').fadeIn('slow');
      });
    }
  });
}

function closenew(a) {
  $('.close-new').click(function () {
    $(a).parent().next('.news-window').slideUp('slow'), $(a).prev('.news-window').slideUp('slow'), $('.news-content').fadeOut('slow'), $(a).parent().removeClass('open'), openednew = !1;
  });
}

var $actual = null,
    opened = !1;
$('.open-disc').click(function () {
  open($(this).data('url')), $actual = $(this);
}), $(document).ajaxComplete(function (a, b, c) {
  if (0 === c.url.indexOf('disc')) {
    var d = $('#playlist0'),
        e = audiojs.create(d, {
      trackEnded: function trackEnded() {
        var a = $('ol.playlist0 li.playing').next();
        a.length || (a = $('ol.playlist0 li').first()), a.addClass('playing').siblings().removeClass('playing'), f.load($('a', a).attr('data-src')), f.play();
      }
    }),
        f = e[0];
    first = $('ol.playlist0 a').attr('data-src'), $('ol.playlist0 li').first().addClass('pause'), f.load(first), $('ol.playlist0 li').click(function (a) {
      a.preventDefault(), 'playing' == $(this).attr('class') ? ($(this).addClass('pause'), f.playPause()) : ($(this).removeClass('pause').addClass('playing').siblings().removeClass('playing').removeClass('pause'), f.load($('a', this).attr('data-src')), f.play());
    });
  }
});
var $actualnew = null,
    openednew = !1;
$('.open-new').click(function () {
  return opennew($(this)), $actualnew = $(this), $actualnew.parent().addClass('open'), !1;
}), $(window).load(function () {
  $('.loader').delay(500).fadeOut(), $('#mask').delay(1000).fadeOut('slow'), $('body').addClass('loaded');
}), $(function () {
  function a() {
    var a = audiojs.createAll({
      trackEnded: function trackEnded() {
        var a = $('ol.playlist li.playing').next();
        a.length || (a = $('ol.playlist li').first()), a.addClass('playing').siblings().removeClass('playing'), b.load($('a', a).attr('data-src')), b.play();
      }
    }),
        b = a[0];
    first = $('ol.playlist a').attr('data-src'), $('ol.playlist li').first().addClass('playing'), b.load(first), $('ol.playlist li').click(function (a) {
      a.preventDefault(), $(this).addClass('playing').siblings().removeClass('playing'), b.load($('a', this).attr('data-src')), b.play();
    }), $('.nextprev .next').click(function (a) {
      a.preventDefault();
      var b = $('ol.playlist li.playing').next();
      b.length || (b = $('ol.playlist li').first()), b.click();
    }), $('.nextprev .prev').click(function (a) {
      var b = $('ol.playlist li.playing').prev();
      b.length || (b = $('ol.playlist li').last()), b.click();
    }), $('.btnloop').click(function (a) {
      $('audio').attr('loop') ? ($('audio').removeAttr('loop'), $(this).removeClass('active')) : ($('audio').attr('loop', 0), $(this).addClass('active'));
    });
  }

  $('.player').length > 0 && a();
}), $('#DateCountdown').length > 0 && ($(window).resize(function () {
  $('#DateCountdown').TimeCircles().rebuild();
}), $('#DateCountdown').TimeCircles({
  animation: 'smooth',
  bg_width: 0.5,
  fg_width: 0.023333333333333334,
  circle_bg_color: '#000000',
  time: {
    Days: {
      text: 'Days',
      color: '#EB2B29',
      show: !0
    },
    Hours: {
      text: 'Hours',
      color: '#EB2B29',
      show: !0
    },
    Minutes: {
      text: 'Minutes',
      color: '#EB2B29',
      show: !0
    },
    Seconds: {
      text: 'Seconds',
      color: '#EB2B29',
      show: !0
    }
  }
})), $(document).ready(function () {
  function a() {
    $('#owl-main-text').owlCarousel({
      autoPlay: 10000,
      goToFirst: !0,
      goToFirstSpeed: 2000,
      navigation: !1,
      slideSpeed: 700,
      pagination: !1,
      transitionStyle: 'fadeUp',
      singleItem: !0
    });
  }

  function b() {
    function a(a) {
      for (var b = a.length, c = 0, d = document.getElementById('twitter-feed'), e = '<ul class="slider-twitter">'; b > c;) {
        e += '<li class="gallery-cell">' + a[c] + '</li>', c++;
      }

      e += '</ul>', d.innerHTML = e, $('.slider-twitter').flickity({
        cellAlign: 'left',
        contain: !0,
        wrapAround: !0,
        prevNextButtons: !1
      });
    }

    var b = {
      id: '702067549920485376',
      domId: 'twitter-feed',
      maxTweets: 4,
      enableLinks: !0,
      showUser: !0,
      showTime: !0,
      dateFunction: '',
      showRetweet: !1,
      customCallback: a,
      showInteraction: !1
    };
    twitterFetcher.fetch(b);
  }

  $('#slides').superslides({
    hashchange: !1,
    animation: 'fade',
    play: 10000
  }), $('#owl-main-text').length > 0 && a(), $('.twitterfeed').length > 0 && b();
  var c = $('.jcarouselDates').flickity({
    cellAlign: 'left',
    wrapAround: !0,
    contain: !0,
    prevNextButtons: !1,
    pageDots: !1,
    draggable: !1
  });
  $('.button-group').on('click', '.button', function () {
    var a = $(this).index();
    c.flickity('select', a), $(this).addClass('active').siblings().removeClass('active');
  }), $('.swipebox').swipebox(), $('.playerVideo').length > 0 && ($('.playerVideo').mb_YTPlayer(), jQuery('.playerVideo').on('YTPPause', function () {
    jQuery('.play-video').removeClass('playing');
  }), jQuery('.playerVideo').on('YTPPlay', function () {
    jQuery('.play-video').addClass('playing');
  }), jQuery('.play-video').on('click', function (a) {
    jQuery('.play-video').hasClass('playing') ? jQuery('.playerVideo').pauseYTP() : (jQuery('audio').each(function (a, b) {
      this.pause();
    }), jQuery('.playerVideo').playYTP()), a.preventDefault();
  }));
}), $(window).load(function () {
  var a = $('.upevents').isotope({
    itemSelector: '.upevent',
    masonry: {
      columnWidth: '.upevent'
    }
  }),
      a = $('.thumbnails').isotope({
    itemSelector: '.thumbnail',
    masonry: {
      columnWidth: '.thumbnail.small'
    }
  });
  $('.filters').on('click', 'li', function () {
    var b = $(this).attr('data-filter');
    a.isotope({
      filter: b
    });
  }), $('.filters').each(function (a, b) {
    var c = $(b);
    c.on('click', 'li', function () {
      c.find('.is-checked').removeClass('is-checked'), $(this).addClass('is-checked');
    });
  }), $('#append').click(function () {
    return newItems = $('#more-items').appendTo('.thumbnails'), $('.thumbnails').isotope('insert', newItems), $(this).hide(), !1;
  });
}), jQuery().parallax && jQuery('.parallax-section').parallax(), $('a[href*=#]').click(function () {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    var a = $(this.hash);

    if (a = a.length && a || $('[name=' + this.hash.slice(1) + ']'), a.length) {
      var b = a.offset().top;
      return $('html,body').animate({
        scrollTop: b - 42
      }, 1000), $('.navbar-collapse.in').removeClass('in').addClass('collapse'), !1;
    }
  }
}), $(function () {
  $(window).bind('scroll', function () {
    $(window).scrollTop() >= 85 ? $('#jHeader').addClass('overflow') : $('#jHeader').removeClass('overflow'), $(window).scrollTop() >= $('.jIntro').height() / 2 ? $('#jHeader').addClass('fixed') : $('#jHeader').removeClass('fixed');
  }), $('.disc-tracklist').on('click', function () {
    alert('CLICK');
  });
}), $('#more-events').click(function () {
  return $('.upcomming-events-list li.more').slideToggle('slow'), $(this).hide(), !1;
});

},{}]},{},[1]);
