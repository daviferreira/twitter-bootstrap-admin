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
    var _checkForHint = function(field){
      var hint = field.next();
      if(!field.data('hint'))
        field.data('hint', hint.html());
      hint.html(field.data('error-message') || 'This field is required.');  
    };
    
    var _validateField = function(field, rule){
      switch(rule){
        case 'required':
          if(!field.val()){
            _checkForHint(field);
            field.addClass('error');
            field.parent().parent().addClass('error');
          }
          break;
      }
    };
    
    $(el).find('[class*=validates]').each(function(){
      var field = $(this);
      field.next().html($(this).data('hint'));
      field.removeClass('error');
      field.parent().parent().removeClass('error');
      
      var rules = /validates\[(.*)\]/.exec(field.attr('class'));
      if(rules){
        rules = rules[1].split(/\[|,|\]/);
        for(i in rules)
          _validateField(field, rules[i]);
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
