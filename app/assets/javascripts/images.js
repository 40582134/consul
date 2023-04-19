$(document).on("cocoon:before-insert", function (e, insertedItem) {
  if (insertedItem.data("association") === "image") {
    var maxImages = insertedItem.data("max-images");
    var imageCount = insertedItem.siblings(".nested-fields:visible").length;

    if (imageCount >= maxImages) {
      $("#new-image-link").addClass("hide").prop("disabled", true);
    }
  }
});

$(document).on("cocoon:after-insert", function (e, insertedItem) {
  if (insertedItem.data("association") === "image") {
    var maxImages = insertedItem.data("max-images");
    var imageCount = insertedItem.siblings(".nested-fields:visible").length;

    if (imageCount >= maxImages) {
      $("#new-image-link").addClass("hide").prop("disabled", true);
    }
  }
});

$(document).on("cocoon:after-remove", function (e, removedItem) {
  if (removedItem.data("association") === "image") {
    $("#new-image-link").removeClass("hide").prop("disabled", false);
  }
});
