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


/* ============ single=blog page ============= */

let nav_link = document.querySelectorAll('.nav-link');

nav_link.forEach((link) => {
    link.addEventListener('click', () => {
        nav_link.forEach((link) => {
            link.classList.remove('active');
        })
        link.classList.add('active')
    })
})

let nav_links = document.querySelectorAll('.blog .nav-link');
let content_sections = document.querySelectorAll('.blog .content');


change_active = ()=>{

    let height = window.scrollY ;

    content_sections.forEach((section , i)=>{
console.log(section.offsetTop);
        if(height >= section.offsetTop - section.offsetHeight * 0.25 ){
            nav_links.forEach((link)=>{
                link.classList.remove('active');
            })
            nav_links[i].classList.add('active');
        }
        
    })

}

window.addEventListener('scroll', change_active);


$(document).ready(function() {
  $('select').niceSelect();
});



const inputElements = [...document.querySelectorAll('input.code')]
    
    inputElements.forEach((ele,index)=>{
      ele.addEventListener('keydown',(e)=>{
        // if the keycode is backspace & the current field is empty
        // focus the input before the current. Then the event happens
        // which will clear the "before" input box.
        if(e.keyCode === 8 && e.target.value==='') inputElements[Math.max(0,index-1)].focus()
      })
      ele.addEventListener('input',(e)=>{
          inputElements[index].focus()
        const [first,...rest] = e.target.value
        e.target.value = first ?? '' // first will be undefined when backspace was entered, so set the input to ""
        const lastInputBox = index===inputElements.length-1
        const didInsertContent = first!==undefined
        if(didInsertContent && !lastInputBox) {
          // continue to input the rest of the string
          inputElements[index+1].focus()
          inputElements[index+1].value = rest.join('')
          inputElements[index+1].dispatchEvent(new Event('input'))
        }
      })
    })
    
    
    // mini example on how to pull the data on submit of the form
    function onSubmit(e){
      e.preventDefault()
      const code = inputElements.map(({value})=>value).join('')
      console.log(code)
    }





// loader
$('#loading').fadeOut(500);

new WOW().init();