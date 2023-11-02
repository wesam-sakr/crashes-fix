// dir
var bodyDir = $('body').css('direction')
var dirAr
if(bodyDir == "rtl"){
  dirAr= true
}
else{
  dirAr = false
}


// ======= search in nav-top ========
var search_btn = $('#basic-addon2');
var search_input = $('#search');

search_input.hide();

search_btn.click(function(){
    search_input.toggle(500);
});

// ==== navbar toggler ======
var open_nav = $('#open');
var close_nav = $('#close');
var nav = $('.navbar-collapse')

open_nav.click(function () {
    nav.addClass("active");
})

close_nav.click(function () {
    nav.removeClass("active");
});




// loader
$('#loading').fadeOut(500);

new WOW().init();