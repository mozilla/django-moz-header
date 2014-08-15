/*
 * In general we assume modern on the mobile site. We don't need full
 * modernizr, but there are features we want to test for.
 */

// Tests below are copied from Modernizr
/*!
 * Modernizr v1.7
 * http://www.modernizr.com
 *
 * Developed by: 
 * - Faruk Ates  http://farukat.es/
 * - Paul Irish  http://paulirish.com/
 *
 * Copyright (c) 2009-2011
 * Dual-licensed under the BSD or MIT licenses.
 * http://www.modernizr.com/license/
 */
 

(function() {

"use strict";

// Inline SVG is not in iPhone or Android webkit _yet_, so we need to fallback.
function inlineSVG() {
  var div = document.createElement('div');
  div.innerHTML = '<svg/>';
  return (div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
}
if(!inlineSVG()) {
    document.documentElement.className += ' ' + 'no-inlinesvg'; 
}

}());
