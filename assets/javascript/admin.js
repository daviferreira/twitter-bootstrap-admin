$(function(){
  $("#lnk-remember").click(function(e){
    $("#m-login").slideUp("fast", function(){
      $("#m-remember").slideDown("fast");
    });
    e.preventDefault();
  });
  $("#btn-cancel-recovery").click(function(e){
    $("#m-remember").slideUp("fast", function(){
      $("#m-login").slideDown("fast");
    });
    e.preventDefault();
  });
});