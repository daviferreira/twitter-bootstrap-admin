var Admin = {

  toggleLoginRecovery: function(){
    var is_login_visible = $('#modal-login').is(':visible');
    (is_login_visible ? $('#modal-login') : $('#modal-recovery')).slideUp(300, function(){
      (is_login_visible ? $('#modal-recovery') : $('#modal-login')).slideDown(300, function(){
        $(this).find('input:text:first').focus();
      });
    });
  },

  initDropdown: function(){
    $('a.dropdown-toggle').click(function(e){
      $(this).next('ul.dropdown-menu').slideToggle('fast');
      e.preventDefault();
    });
  }
   
};

$(function(){

  Admin.initDropdown();

  $('.toggle-login-recovery').click(function(e){
    Admin.toggleLoginRecovery();
    e.preventDefault();
  });

});
