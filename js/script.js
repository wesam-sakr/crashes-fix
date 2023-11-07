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
    search_input.toggle(200);
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


////////////////////// profile photo change ///////////////////////////

let profile_photo = document.getElementById('profile-photo');
let photo = document.getElementById('photo');
let file = document.getElementById('file');

if( file !=null){
  file.onchange = ()=>{
    let choosedFile = file.files[0];
    if(choosedFile){
      let reader = new FileReader();
      reader.onload = ()=>{
        photo.setAttribute('src' , reader.result);
      }
      reader.readAsDataURL(choosedFile);
    }
  }
}


// loader
$('#loading').fadeOut(500);

new WOW().init();