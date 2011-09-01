describe("Login", function() {

  describe("Validations", function(){
    beforeEach(function(){
    
    });

    afterEach(function(){
    
    });

    describe("Login form validation", function(){
    
    });

    describe("Password recovery form validation", function(){
    
    });  
  });

  describe("Toggle login/recovery", function(){
    beforeEach(function(){
      $('<div id="m-login"></div>').appendTo('body');
      $('<div id="m-recovery"><input type="text" id="recovery-input" /></div>').appendTo('body').hide();
    });
    
    afterEach(function(){
      $("#m-login").remove();
      $("#m-recovery").remove();
    });

    it("should toggle between login and password recovery", function() {
      expect($("#m-login").is(":visible")).toBe(true);
      expect($("#m-recovery").is(":visible")).toBe(false);
      Admin.toggleLoginRecovery();
      waits(1200);
      runs(function(){
        expect($("#m-login").is(":visible")).toBe(false);
        expect($("#m-recovery").is(":visible")).toBe(true);      
      });
    });

    it("should focus on the first input text after toggling", function(){
      expect($("#m-recovery input:focus").length).toEqual(0);
      Admin.toggleLoginRecovery();
      waits(1200);
      runs(function(){
        expect($("#m-recovery input:focus").length).toEqual(1);
      });
    });
  });

});
