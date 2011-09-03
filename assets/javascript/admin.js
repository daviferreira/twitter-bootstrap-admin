var Admin = {

  toggleLoginRecovery: function(){
    var is_login_visible = $('#m-login').is(':visible');
    (is_login_visible ? $('#m-login') : $('#m-recovery')).slideUp(300, function(){
      (is_login_visible ? $('#m-recovery') : $('#m-login')).slideDown(300, function(){
        $(this).find('input:text:first').focus();
      });
    });
  },
  
  validateForm: function(el){
    $(el).find('.error').each(function(){
      $(this).next().html($(this).data('hint'));
      $(this).removeClass('error');
    });
    $(el).find('.required').each(function(){
      if(!$(this).val()){
        var hint = $(this).next();
        if(!$(this).data('hint'))
          $(this).data('hint', hint.html());
          
        $(this).addClass('error');
        $(this).parent().parent().addClass('error');
        hint.html($(this).data('error-message') || 'This field is required.');
      }
    });

    if($(el).find('.error').length > 0){
      $(el).find('input.error, textarea.error')[0].focus();
      return false;
    }
    return true;
  }

};


$(function(){
  $('form:visible:first input:text:first').focus();
  $('.toggle-login-recovery').click(function(e){
    Admin.toggleLoginRecovery();
    e.preventDefault();
  });
  $('form').submit(function(e){
    return Admin.validateForm(this);
  });
});
