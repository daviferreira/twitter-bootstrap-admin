describe('Interface', function(){

  describe('Toggle dropdown menu', function(){
  
    beforeEach(function(){
      loadFixtures('../../../fixtures/dropdown.html'); 
    });

    it('Should toggle a dropdown menu visibility', function(){
      Admin.initDropdown();
      expect($('.dropdown-menu').is(':visible')).toBeFalsy();
      $('#dropdown-toggle').click();
      expect($('.dropdown-menu').is(':visible')).toBeTruthy();
    });

  });

});
