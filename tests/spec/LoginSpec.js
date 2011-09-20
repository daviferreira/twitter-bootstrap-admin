describe('Login', function() {

  describe('Toggle login/recovery', function(){
    beforeEach(function(){
      $('<div id="modal-login"></div>').appendTo('body');
      $('<div id="modal-recovery"><input type="text" id="recovery-input" /></div>').appendTo('body').hide();
    });
    
    afterEach(function(){
      $('#modal-login').remove();
      $('#modal-recovery').remove();
    });

    it('Should toggle between login and password recovery', function() {
      expect($('#modal-login').is(':visible')).toBe(true);
      expect($('#modal-recovery').is(':visible')).toBe(false);
      Admin.toggleLoginRecovery();
      waits(1500);
      runs(function(){
        expect($('#modal-login').is(':visible')).toBe(false);
        expect($('#modal-recovery').is(':visible')).toBe(true);      
      });
    });

    it('Should focus on the first input text after toggling', function(){
      expect($('#modal-recovery input:focus').length).toEqual(0);
      Admin.toggleLoginRecovery();
      waits(1500);
      runs(function(){
        expect($('#modal-recovery input:focus').length).toEqual(1);
      });
    });
  });

});
