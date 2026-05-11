(function (window, document) {
  "use strict";

  function renderPartners() {
    var row = document.getElementById("partnerRow");
    if (!row) return;

    var count = Number(row.dataset.partnerCount || 0);
    var fragment = document.createDocumentFragment();

    for (var index = 1; index <= count; index += 1) {
      var item = document.createElement("div");
      item.className = "partnerPadding";

      var image = document.createElement("img");
      image.className = "img-fluid";
      image.src = "/image/partners" + index + ".png";
      image.alt = "지구인살리기 파트너";
      image.width = 225;
      image.height = 120;

      item.appendChild(image);
      fragment.appendChild(item);
    }

    row.appendChild(fragment);
  }

  window.EarthlingSavePartners = {
    render: renderPartners,
  };
})(window, document);
