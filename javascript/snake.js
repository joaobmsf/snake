$(document).ready(function() {
  for(var i = 0; i < 10; ++i) {
    $(".tela").append('<div class="row"> \
      <div class="cell js-cell"> &nbsp; </div> \
      <div class="cell js-cell"> &nbsp; </div> \
      <div class="cell js-cell"> &nbsp; </div> \
      <div class="cell js-cell"> &nbsp; </div> \
      <div class="cell js-cell"> &nbsp; </div> \
      <div class="cell js-cell"> &nbsp; </div> \
      <div class="cell js-cell"> &nbsp; </div> \
      <div class="cell js-cell"> &nbsp; </div> \
      <div class="cell js-cell"> &nbsp; </div> \
      <div class="cell js-cell"> &nbsp; </div> \
      <div style="clear: both;"></div> \
    </div>');
  }

  var jsCells = $(".js-cell");
  var width = jsCells.css("width");
  jsCells.css("height", width);

  jsCells.hide();
  jsCells.fadeIn("slow");

});

