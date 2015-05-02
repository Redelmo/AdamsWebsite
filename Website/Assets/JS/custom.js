//$(function() {
//    $('html').click(function() {

//    });

//});

//$(document).ready(function () {
//    $('#tipue_search_input').tipuesearch();
//});

$.fn.isOnScreen = function () {
    var viewport = {};
    viewport.top = $(window).scrollTop();
    viewport.bottom = viewport.top + $(window).height();
    var bounds = {};
    bounds.top = this.offset().top;
    bounds.bottom = bounds.top + this.outerHeight();
    return ((bounds.top <= viewport.bottom) && (bounds.bottom >= viewport.top));
};

//$.fn.isOnScreen = function () {
//    var element = this.get(0);
//    var bounds = element.getBoundingClientRect();
//    return bounds.top < window.innerHeight && bounds.bottom > 0;
//}

if ($('.navbar').isOnScreen > 0) {
    alert('test');
}