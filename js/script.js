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
let search_btn = $('#basic-addon2');
let search_input = $('#search');

search_input.hide();

search_btn.click(function(){
    search_input.toggle(500);
});

// ==== navbar toggler ======
let open_nav = $('#open');
let close_nav = $('#close');
let nav = $('.navbar-collapse')

open_nav.click(function () {
    nav.addClass("active");
})

close_nav.click(function () {
    nav.removeClass("active");
});

$(document).on('click' , (e)=>{
  !$(e.target).closest('.navbar').length ? nav.removeClass("active") : '';
})


/*================ payment page =================*/

$(document).ready(function () {
  let online_chose = $('.method'); 
  let pay_form = $('.pay-form');
  
  online_chose.on('change', function () {
    if (this.value === 'online-pay' && this.checked) {
      pay_form.show(500);
    } else {
      pay_form.hide(500);
    }
  });
});



// loader
$('#loading').fadeOut(500);

new WOW().init();