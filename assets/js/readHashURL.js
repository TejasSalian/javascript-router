'use strict';
$.getScript('./assets/js/router.js', function() {});
$.getScript('./assets/js/router-module.js', function() {});
$(window).bind( 'hashchange', function() {
  var componentObject = navigate(location.hash);
  console.log(componentObject);

  // page loading code here
  $( "#pageData" ).load( componentObject.component+ ".phtml", function() {
	  $( "title" ).text(componentObject.title);
  });

});
$(document).ready(function() {
  if (location.hash == '') {
    window.location.replace(location.href + '#!0');
  }
});
