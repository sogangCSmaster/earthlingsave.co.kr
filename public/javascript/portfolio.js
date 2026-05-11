(function (window, document, $) {
  "use strict";

  var INITIAL_COUNT = 16;
  var PAGE_SIZE = 4;
  var items = window.EarthlingSavePortfolio || [];
  var visibleCount = 0;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function createCard(item) {
    var title = escapeHtml(item.title);
    var thumbnail = escapeHtml(item.thumbnail);

    return [
      '<div class="portfolioPadding">',
      '  <div class="portfolioHover">',
      '    <div class="portfolioImage" style="background-image: url(\'' + thumbnail + '\');"></div>',
      '    <div class="portfolioAnimation d-flex flex-column justify-content-center align-items-center text-center" data-index="' + item.index + '">',
      '      <div class="portfolioTitle">' + title + "</div>",
      '      <div class="portfolioView"><img src="/image/section3_detail.png" alt=""></div>',
      "    </div>",
      "  </div>",
      '  <div class="portfolioMo" data-index="' + item.index + '">',
      '    <div class="portfolioImage" style="background-image: url(\'' + thumbnail + '\');"></div>',
      "  </div>",
      "</div>",
    ].join("");
  }

  function updateLoadMoreButton() {
    if (visibleCount >= items.length) {
      $("#laodMorePostRow").remove();
    }
  }

  function renderMore(count) {
    var nextItems = items.slice(visibleCount, visibleCount + count);
    if (!nextItems.length) {
      updateLoadMoreButton();
      return;
    }

    $("#portfolioRow").append(nextItems.map(createCard).join(""));
    visibleCount += nextItems.length;
    updateLoadMoreButton();
  }

  function findItem(index) {
    return items.find(function (item) {
      return item.index === index;
    });
  }

  function createModalContent(item) {
    if (item.media.type === "image") {
      return '<img class="img-fluid portfolio-modal-image" src="' + escapeHtml(item.media.src) + '" alt="' + escapeHtml(item.title) + '">';
    }

    return [
      '<div class="portfolio-video-frame">',
      '  <iframe src="' + escapeHtml(item.media.src) + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      "</div>",
    ].join("");
  }

  function openPortfolioModal() {
    var index = Number($(this).attr("data-index"));
    var item = findItem(index);
    if (!item) return;

    $("#portfolioModal .modal-body").html(createModalContent(item));
    $("#portfolioModal .modalText").text(item.title);
    $("#portfolioModal").modal("show");
  }

  function bindEvents() {
    $("#laodMorePost").on("click", function () {
      renderMore(PAGE_SIZE);
    });
    $(document).on("click", ".portfolioAnimation, .portfolioMo", openPortfolioModal);
    $("#portfolioModal").on("hide.bs.modal", function () {
      $("#portfolioModal .modal-body").empty();
    });
  }

  function init() {
    renderMore(INITIAL_COUNT);
    bindEvents();
  }

  window.EarthlingSavePortfolioApp = {
    init: init,
  };
})(window, document, window.jQuery);
