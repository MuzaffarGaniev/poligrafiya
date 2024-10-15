const menuBtn = document.querySelector('.burger')
const menuInfo = document.querySelector('.menu_info')


menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    menuInfo.classList.toggle('menu_info-onn')
})

window.addEventListener('scroll', function(){
    var scroll = this.document.querySelector('.upbutton');
    scroll.classList.toggle("active", window.scrollY>500);
})
   function scrollTopTop() {
       window.scrollTo({
           top:0,
           behavior:'smooth'
       })
   }


   let mask = document.querySelector('.mask');
    window.addEventListener('load', () => {
        mask.classList.add('hide');
        setTimeout(() => { 
            mask.remove();
        }, 600);
    });
