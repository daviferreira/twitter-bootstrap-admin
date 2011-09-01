describe("Login", function() {
  
  beforeEach(function(){
    $('<div id="m-login"></div>').appendTo('body');
    $('<div id="m-recovery"></div>').appendTo('body').hide();
  });
  
  afterEach(function(){
    $("#m-login").remove();
    $("#m-recovery").remove();
  });

  it("should toggle between login and password recovery", function() {
    toggleLoginRecovery();
    expect($("#m-login").is(":visible")).toBe(false);
    expect($("#m-recovery").is(":visible")).toBe(true);
  });

});