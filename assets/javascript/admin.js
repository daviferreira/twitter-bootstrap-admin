var Admin = {

  toggleLoginRecovery: function(){
    var is_login_visible = $("#m-login").is(":visible");
    (is_login_visible ? $("#m-login") : $("#m-recovery")).slideUp(300, function(){
      (is_login_visible ? $("#m-recovery") : $("#m-login")).slideDown(300, function(){
        $(this).find("input:text:first").focus();
      });
    });
  }

};


$(function(){
  $("form:visible:first input:text:first").focus();
  $(".toggle-login-recovery").click(function(e){
    Admin.toggleLoginRecovery();
    e.preventDefault();
  });
});
