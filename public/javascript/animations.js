(function (window, $) {
  "use strict";

  if (!$) return;

  var section3IconActivated = false;
  var supportPageOffset = window.pageXOffset !== undefined;
  var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

  function scrollY() {
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }

  function flyAnimation576() {
    var y = scrollY();

    if (y < 100) $(".section2-icon2-576").css({ right: -307 });
    else if (y <= 400) $(".section2-icon2-576").css({ right: -307 + (307 / 300) * (y - 100) });
    else $(".section2-icon2-576").css({ right: 0 });

    if (y < 700) $(".section2-icon1-576").css({ left: -294 });
    else if (y >= 750 && y <= 900) $(".section2-icon1-576").css({ left: -294 + (294 / 150) * (y - 750) });
    else $(".section2-icon1-576").css({ left: 0 });
  }

  function flyAnimation768() {
    var y = scrollY();

    if (y < 100) $(".section2-icon1-768").css({ left: -453 });
    else if (y <= 400) $(".section2-icon1-768").css({ left: -453 + (453 / 300) * (y - 100) });
    else $(".section2-icon1-768").css({ left: 0 });

    if (y < 700) $(".section2-icon2-768").css({ right: -446 });
    else if (y <= 1300) $(".section2-icon2-768").css({ right: -446 + (446 / 600) * (y - 700) });
    else $(".section2-icon2-768").css({ right: 0 });
  }

  function flyAnimation1400() {
    var y = scrollY();

    if (y < 100) $(".section2-icon1-1400").css({ left: 75 - 665 });
    else if (y <= 400) $(".section2-icon1-1400").css({ left: 75 - 665 + (660 / 300) * (y - 100) });
    else $(".section2-icon1-1400").css({ left: 75 });

    if (y < 700) $(".section2-icon2-1400").css({ right: -650 });
    else if (y <= 1300) $(".section2-icon2-1400").css({ right: -650 + (650 / 600) * (y - 700) });
    else $(".section2-icon2-1400").css({ right: 0 });
  }

  function ufoAnimation() {
    if (section3IconActivated || scrollY() < 1400) return;

    section3IconActivated = true;
    $(".section3-icon1-576").animate({ top: "80px", left: "50%" }, 800, function () {
      $(".wifi").addClass("crescendo");
      window.setTimeout(function () {
        $(".wifi").css({ "border-bottom": "8px solid #72BF44" });
        $(".portfolioText").addClass("textappear");
      }, 1000);
      window.setTimeout(function () {
        $(".portfolioText").css({ "background-position": "0 50%" });
        $(".wifi").addClass("decrescendo");
        $(".portfolioText").addClass("textwhite");
      }, 2500);
      window.setTimeout(function () {
        $(".section3-icon1-576").addClass("bounce");
      }, 4500);
    });
  }

  function init() {
    flyAnimation576();
    flyAnimation768();
    flyAnimation1400();
    ufoAnimation();
    $(window).on("scroll", flyAnimation576);
    $(window).on("scroll", flyAnimation768);
    $(window).on("scroll", flyAnimation1400);
    $(window).on("scroll", ufoAnimation);
  }

  window.EarthlingSaveAnimations = {
    init: init,
  };
})(window, window.jQuery);
