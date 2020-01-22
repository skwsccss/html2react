;(function() {
  'use strict';
  $(activate);


  function activate() {

      $('#chatTab .nav-tabs')
      .scrollingTabs()
      .on('ready.scrtabs', function() {
        $('.tab-content').show();
      });

  }
}());
