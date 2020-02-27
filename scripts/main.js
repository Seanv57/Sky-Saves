$(".btn").click(function(){
   $(".modal").hide();
   var Type = $(this).data("modal-type");
   $("#"+Type).show();
});

$(".close").click(function(){
  $(".modal").hide();
})

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myDIV *").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
