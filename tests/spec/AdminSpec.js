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
    expect($("#m-login").is(":visible")).toBe(true);
    expect($("#m-recovery").is(":visible")).toBe(false);
    login.remove();
    recovery.remove();
  });
  
  it("should do it, fuck", function(){
    toggleLoginRecovery();
    console.log($("#m-login"));
    console.log($("#m-login").css("display"));
    expect($("#m-login").is(":visible")).toBe(false);
    expect($("#m-recovery").is(":visible")).toBe(true);
  });

});