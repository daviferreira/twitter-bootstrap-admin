$(function(){
  $("form:visible:first input:text:first").focus();
  
  $("#lnk-remember").click(function(e){
    $("#m-login").slideUp("fast", function(){
      $("#m-remember").slideDown("fast", function(){
        $(this).find("input:text:first").focus();
      });
    });
    e.preventDefault();
  });
  $("#btn-cancel-recovery").click(function(e){
    $("#m-remember").slideUp("fast", function(){
      $("#m-login").slideDown("fast", function(){
        $(this).find("input:text:first").focus();
      });
    });
    e.preventDefault();
  });
});