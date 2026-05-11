(function (window, document, $) {
  "use strict";

  var OFFICE = {
    lat: 37.5175297,
    lng: 127.0201672,
  };

  function initMap() {
    var mapContainer = document.getElementById("map");
    var mapWrapper = document.getElementById("mapContainer");
    if (!mapContainer || !mapWrapper || !window.kakao || !window.kakao.maps) return;

    try {
      var position = new window.kakao.maps.LatLng(OFFICE.lat, OFFICE.lng);
      var map = new window.kakao.maps.Map(mapContainer, {
        center: position,
        level: 2,
      });
      var marker = new window.kakao.maps.Marker({
        position: position,
      });
      var infowindow = new window.kakao.maps.InfoWindow({
        position: position,
        content: '<div style="font: 13px/23px Apple_light; letter-spacing: 1.12px; padding: 3px 0 3px 10px;">지구인살리기</div>',
        removable: true,
      });

      marker.setMap(map);
      infowindow.open(map, marker);
      mapWrapper.classList.add("map-ready");
    } catch (error) {
      mapContainer.setAttribute("data-map-error", "true");
    }
  }

  $(function () {
    if (window.EarthlingSavePartners) window.EarthlingSavePartners.render();
    if (window.EarthlingSavePortfolioApp) window.EarthlingSavePortfolioApp.init();
    if (window.EarthlingSaveAnimations) window.EarthlingSaveAnimations.init();
    initMap();
  });
})(window, document, window.jQuery);
